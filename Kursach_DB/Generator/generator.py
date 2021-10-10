import os, codecs, ast
from random import randint
#import arcpy


    
logins = []
passwords = []
names = []
surnames = []
roles = ["customer", "vendor", "admin"]


logins_file = open("data/users/login.txt", "r", encoding="utf-8")
passwords_file = open("data/users/password.txt", "r", encoding="utf-8")
names_file = open("data/users/name.txt", "r", encoding="utf-8")
surnames_file = open("data/users/surname.txt", "r", encoding="utf-8")

result_file = open("result.txt", "w")

for i in logins_file:
    logins.append(i)

for i in passwords_file:
    passwords.append(i)

for i in names_file:
    names.append(i)

for i in surnames_file:
    surnames.append(i)


i = 0

while (i < 2):
    stroke = "(\""
    stroke += logins[randint(0, len(logins) - 1)]
    stroke += "\",\""
    stroke += passwords[randint(0,len(passwords))]
    stroke += "\",\""
    stroke += name[]

    print(stroke)
    i+=1



logins_file.close()
passwords_file.close()
names_file.close()
surnames_file.close()
result_file.close()