import requests
from datetime import date, timedelta
import time

# Function to perform login and download data for a given date
def login_and_download_data(username, password, data_url):
    session = requests.Session()

    # Perform login
    login_url = 'https://ehydromet.in/model/dologin.php'
    login_data = {
        'username': username,
        'password': password,
        # Add any other necessary fields like CSRF tokens, etc.
    }
    login_response = session.post(login_url, data=login_data)

    if login_response.status_code == 200:
        print("Login successful")
    else:
        print(f"Login failed with status code {login_response.status_code}")
        return False

    # Download the data
    download_response = session.get(data_url)

    if download_response.status_code == 200:
        # Save the data to a file with appropriate extension based on content type
        filename = f"downloaded_data_{date.today() - timedelta(days=1)}.xls"  # Include today's date in the filename
        with open(filename, 'wb') as f:
            f.write(download_response.content)
        print(f"Data downloaded successfully for {date.today() - timedelta(days=1)}")
        return True
    else:
        print(f"Failed to download data with status code {download_response.status_code}")
        return False

# Your login credentials
username = 'your_username'
password = 'your_password'

# Base URL for data download
base_data_url = 'https://ehydromet.in/exportdatewiseexcel2.php?modemid=IITK_AWS3'

# Infinite loop to download data daily for the previous day
while True:
    # Calculate previous day's date
    previous_day = date.today() - timedelta(days=1)
    data_url = f"{base_data_url}&startdate={previous_day}&enddate={previous_day}"

    # Perform login and download for the previous day
    success = login_and_download_data(username, password, data_url)

    if success:
        # Wait for 24 hours before downloading data for the next day
        time.sleep(24 * 60 * 60)  # sleep for 24 hours (in seconds)
    else:
        # If download fails, retry after a shorter interval (e.g., 1 hour)
        time.sleep(60 * 60)  # sleep for 1 hour (in seconds)
