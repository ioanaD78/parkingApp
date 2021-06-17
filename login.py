from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import bcrypt

app = Flask(__name__)

# de pus in scris de scos de aici
# The secret plus the data-to-sign are used to create a signature string, a hard-to-recreate value using
# a cryptographic hashing algorithm; only if you have the exact same secret and the original data can
# you recreate this value, letting Flask detect if anything has been altered without permission.
# Since the secret is never included with data Flask sends to the client,
# a client cannot tamper with session data and hope to produce a new, valid signature.

# Flask secret key for added protection
app.secret_key = '2@&hsf4#@g*wer9!'

# Database connection details
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1a2b3c!'
app.config['MYSQL_DB'] = 'python-login'

# Intializing MySQL
mysql = MySQL(app)

# http://localhost:5000/python-login/register - this will be the registration page, we need to use both GET and POST requests
# Register route for handling the POST request


@app.route('/python-login/register', methods=['GET', 'POST'])
def register():

    # Output message if something goes wrong...
    msg = ''

    # Check if "name", "password" and "email" + phone and license plate POST requests exist (user submitted form)
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form and 'name' in request.form:

        # Create variables for easy access
        email = request.form['email']
        password = request.form['password']
        name = request.form['name']

        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            'SELECT * FROM register WHERE email = %s', (email,))
        account = cursor.fetchone()

        # If account exists show error and validation checks
        if account:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address!'
        elif not email or not password:
            msg = 'Please fill in all the fields!'

        else:
            # Account doesnt exists and the form data is valid, now insert new account into accounts table
            cursor.execute(
                'INSERT INTO register VALUES (NULL, %s, %s)', (email, hashed, name))
            mysql.connection.commit()
            msg = 'You have successfully registered!'

    elif request.method == 'POST':
        # Form is empty... (no POST data)
        msg = 'Please fill out the form!'

    # Show registration form with message (if any)
    return render_template('register.html', msg=msg)


@app.route('/python-login/', methods=['GET', 'POST'])
def login():

    # Output message if something goes wrong...
    msg = ''

    # Check if "username" and "password" POST requests exist (user submitted form)
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:

        # Create variables for easy access
        email = request.form['email']
        password = request.form['password']

        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)

        cursor.execute(
            'SELECT * FROM register WHERE email = %s', (email,))

        # Fetch one record and return result
        account = cursor.fetchone()

        if bcrypt.checkpw(password.encode('utf-8'), hashed):
            return redirect(url_for('home'))
        else:
            return 'Invalid Login Info!', 400

    # Show the login form with message (if any)
    return render_template('index.html', msg=msg)


@app.route('/python-login/logout')
def logout():

    # Remove session data, this will log the user out
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('email', None)

    # Redirect to login page
    return redirect(url_for('login'))

# http://localhost:5000/python-login/home - this will be the home page, only accessible for loggedin users


@app.route('/python-login/home')
def home():
    # Check if user is loggedin
    if 'loggedin' in session:
        # User is loggedin show them the home page
        return render_template('home.html', username=session['email'])
    # User is not loggedin redirect to login page
    return redirect(url_for('login'))

# http://localhost:5000/python-login/profile - this will be the profile page, only accessible for loggedin users


@app.route('/python-login/profile')
def profile():
    # Check if user is loggedin
    if 'loggedin' in session:
        # We need all the account info for the user so we can display it on the profile page
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM register WHERE id = %s',
                       (session['id'],))
        account = cursor.fetchone()
        # Show the profile page with account info
        return render_template('profile.html', account=account)
    # User is not loggedin redirect to login page
    return redirect(url_for('login'))
