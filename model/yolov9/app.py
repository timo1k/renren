from flask import Flask, request
import subprocess
import io
from PIL import Image
import base64

from detect import run

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/detect', methods=["GET", "POST"])
def detect():
    if request.method == 'POST':  # get form data when method is POST

        try:

            imageData = request.json['image']
            imageData = imageData.encode()

            # imageData.seek(0)
            img = Image.open(imageData)
            # print(imageData.content)
            # run(source = img,
            #     weights = "best.pt",)

            # img = Image.open(imageData)
        except Exception as e:
            print(e)
            return str(e)


    return 'detect'
