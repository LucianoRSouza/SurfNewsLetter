from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Load configuration from environment variables
app.config['MYSQL_HOST'] = 'database'  # Docker service name for MySQL
app.config['MYSQL_USER'] = 'Vlap'
app.config['MYSQL_PASSWORD'] = '456123'
app.config['MYSQL_DB'] = 'webapp_db'

mysql = MySQL(app)

@app.route('/submit_email', methods=['POST'])
def submit_email():
    try:
        # Get email data from request
        data = request.get_json()
        email = data['email']

        # Insert email data into MySQL database
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO emails (email) VALUES (%s)", (email,))
        mysql.connection.commit()
        cur.close()

        return 'Email submitted successfully'
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
