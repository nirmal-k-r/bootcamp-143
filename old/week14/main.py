from dog import Dog

#main program
tommy=Dog('Tommy','German Shepherd','Brown')

tommy.info()
print('--------')
tommy.bark()
tommy.bark()


tommy.color='Black'
tommy.info()
print('--------')

tommy.walk(3000)
tommy.walk(10000)