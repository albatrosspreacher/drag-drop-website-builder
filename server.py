from flask import Flask, render_template
import platform

app = Flask(__name__)

@app.route('/')
def render_static():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)