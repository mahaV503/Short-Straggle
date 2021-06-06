
from datetime import datetime
from threading import Timer
import smtplib
from bs4 import BeautifulSoup
import time
import requests
url = "https://www.nseindia.com/option-chain"
headerss = {
    "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'}
page = requests.get(url, headers=headerss)


def ipad_alert():

    page = requests.get(url, headers=headerss)
    soup = BeautifulSoup(page.content, 'html.parser')

    # print(soup.prettify())
    status = soup.findAll("a", {"data-analytics-title": "view pricing"})
    # for span in price:
    # if span.find_all('class'='cwUqwd'):
    # print(soup.find(class="cwUqwd"))

    print(status[0])

    print(status[0].get_text())

    stats = status[0].get_text()

    if (stats != "View pricing for iPad Air "):
        send_notification()   # the value will be changed to something other than this
    return stats            # when ipad is avalaible so when negative condition


# send notification will send mail


def send_notification():
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login('mravishnu@gmail.com', 'pwpw')
    subject = "ipad released bro msg me i'll buy "
    body = " send me money also"
    message = f"Subject:{subject}\n\n{body}"
    server.sendmail(
        'mravishnu@gmail.com',
        'mra503@nyu.edu',
        message
    )
    print("ipad released bro msg me i'll buy")
    server.quit()


'''
x=datetime.today()
y=x.replace(day=x.day+1, hour=9, minute=0, second=0, microsecond=0)
delta_t=y-x
print(x)
print(y)
print(delta_t)
secs=delta_t.total_seconds()
print(secs)
t = Timer(secs, target_alert("oracle"))
t.start()
'''
while(True):
    a = ipad_alert()
    # will run for every one hour and stops as soon as ipad released
    time.sleep(60*60)
    if (a != "View pricing for iPad Air "):
        break
