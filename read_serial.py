import serial
import urllib

ser = serial.Serial('/dev/cu.usbmodem1421', 9600)
while True:
	value = ser.readline()
	print value
	if value == 'onChair\r\n':
		print "hey"
		urllib.urlopen("http://localhost:3010/?url=https://google.com/")
		break
