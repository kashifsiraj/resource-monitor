from flask import Flask, render_template, jsonify
import psutil

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resource_info')
def resource_info():
    memory_percent = psutil.virtual_memory().percent
    cpu_percent = psutil.cpu_percent()
    disk_percent = psutil.disk_usage('/').percent

    return jsonify(memory_percent=memory_percent, cpu_percent=cpu_percent, disk_percent=disk_percent)

if __name__ == '__main__':
    app.run(debug=True)
