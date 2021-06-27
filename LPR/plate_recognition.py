# FILE ALSO IN XAMPP - HTDOCS FOLDER

import cv2
from matplotlib import pyplot as plt
import numpy as np
import imutils
import easyocr
import mysql.connector
import logging

logging.basicConfig(filename='logs.log', level=logging.DEBUG)


def plateRecognition():

    # reading image from file
    img = cv2.imread('/parkingApp/images/test2.jpg')
    # changing image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # plt.imshow(cv2.cvtColor(gray, cv2.COLOR_BGR2RGB))

    # applying filter for noise reduction
    noise_filter = cv2.bilateralFilter(gray, 11, 17, 17)
    # detecting edges within the image
    edge = cv2.Canny(noise_filter, 30, 200)
    # plt.imshow(cv2.cvtColor(edge, cv2.COLOR_BGR2RGB))

    # scanning through the immage and trying to find contours
    # returning a tree of results
    # returning only simple shapes - approximating what the found contour looks like
    shapePoints = cv2.findContours(
        edge.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    # grabbing, sorting and returning the first 10 shapes found
    shapes = imutils.grab_contours(shapePoints)
    shapes = sorted(shapes, key=cv2.contourArea, reverse=True)[:10]

    # checking if the shape is a license plate
    # setting a temporary var - location
    # looping through the sorted shapes
    location = None
    for shape in shapes:
        # approximating the polygon from the shape found
        # 10 - shape accuracy, rounding off the shape
        approx = cv2.approxPolyDP(shape, 100, True)
        # if the approximation has 4 points => most likely a license plate
        if len(approx) == 4:
            location = approx
            break
    location
    # creating a blank mask the same size as the original image
    mask = np.zeros(gray.shape, np.uint8)
    # drawing the shape found at the previously found location
    newImg = cv2.drawContours(mask, [location], 0, 255, -1)
    # overlaying the mask over the original image => displaying just the license plate
    newImg = cv2.bitwise_and(img, img, mask=mask)

    # plt.imshow(cv2.cvtColor(newImg, cv2.COLOR_BGR2RGB))

    # getting the coordinates representing the photo area != black
    (x, y) = np.where(mask == 255)
    # getting the upper left corner
    (x1, y1) = (np.min(x), np.min(y))
    # getting the lower right corner
    (x2, y2) = (np.max(x), np.max(y))
    licensePlate = gray[x1: x2 - 10, y1: y2 - 10]

    # plt.imshow(cv2.cvtColor(licensePlate, cv2.COLOR_BGR2RGB))

    reader = easyocr.Reader(['ro'])
    result = reader.readtext(licensePlate)
    result
    result = result[0][1]

    str = ''.join(result)
    str.replace(" ", "")
    # print(str)

    cnx = mysql.connector.connect(
        user='root', password='1a2b3c!', database='python-login')
    cursor = cnx.cursor(prepared=True)
    stmt = "SELECT phone FROM register WHERE plate = %s"  # (1)
    cursor.execute(stmt, (str,))
    row = cursor.fetchone()
    phone = row[0]
    print(phone)


plateRecognition()


# app = Flask(__name__)


# @ app.route('/lpRecognition')
# def serve():

#     return jsonify(lpRecognition=plateRecognition())


# app.run(host="0.0.0.0", port=90)

# ##### pip install Flask #####

# # from datetime import datetime
# # from flask import Flask, jsonify


# # def timeNow():
# #     return datetime.now().strftime('%Y-%m-%d %H:%M:%S').split(" ")[1]


# # app = Flask(__name__)


# # @app.route('/time')  # http://127.0.0.1/time
# # def serve():
# #     return jsonify({"time": timeNow()})


# # app.run(host="0.0.0.0", port=80)
