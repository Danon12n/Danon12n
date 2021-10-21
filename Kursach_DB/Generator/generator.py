import os, codecs, ast
from random import randint
#import arcpy

def make_string_arg(value): 
    return "'" + value + "'"

Mname = ["Bobik","Charli","Cooper","Harlie","Hatiko","Barboss","Korner","Bugs","Bred","Archie","Bruno","Alto","James","Ruf","Chester"]
Fname = ["Gerda","Anda","Terra","Bella","Bonnie","Nessi","Miki","Aby","Dakota","Ollie","Daisy","Maggie","Emma","Afina"]

pet_type = ["Cat", "Dog", "Hedgehog", "Raccoon", "Fox"]
color = ["Red","Green","Brown","White","Black","Grey","Orange","NoColor"]
# age - randint(1, 10)
# can_swim randint(0, 1)
gender = ["Male", "Female"]
# price - randint(5000, 1000000)
# available - "Yes"

inserts = []


#logins_file = open("data/users/login.txt", "r", encoding="utf-8")
result_file = open("result.txt", "w")
result_file2 = open("result2pets.txt", "w")

#"Insert into pet_info (pet_id, pet_type, name, age, color, can_swim, reproduce_ability, gender, pet_breed Values "

n = 200
index = 13

for i in range(n):

    genderI = randint(0,1) # 0 - Male, 1 - Female
    stroke = "("
    stroke += str(index + i) + ","
    stroke += make_string_arg(pet_type[randint(0, len(pet_type)-1)]) + ","
    if (genderI == 0):
        stroke += make_string_arg(Mname[randint(0, len(Mname)-1)]) + ","
    else:
        stroke += make_string_arg(Fname[randint(0, len(Fname)-1)]) + ","
    stroke += str(randint(1, 10)) + ","
    stroke += make_string_arg(color[randint(0, len(color)-1)]) + ","
    stroke += str(randint(0, 1)) + "," + str(randint(0, 1)) + ","
    stroke += make_string_arg(gender[genderI]) + ","
    stroke += make_string_arg("pet_breed") + "),\n"
    inserts.append(stroke)
    result_file.write(inserts[i])


inserts = []
for i in range(n):
    stroke1 = "("
    stroke1 += str(index + i) + ","
    stroke1 += str(randint(1, 15)) + ","
    stroke1 += str(randint(5000, 1000000)) + ","
    stroke1 += make_string_arg("Yes") + "),\n"
    inserts.append(stroke1)
    result_file2.write(inserts[i])


result_file2.close()
result_file.close()

