class Dog:
    def __init__(self,name,breed,color):
        self.name=name
        self.breed=breed
        self.color=color

    #adding behaviors to the class
    def bark(self):
        print('Woof! Woof!')

    def info(self):
        print(self.name)
        print(self.breed)
        print(self.color)

    def walk(self,steps):
        print(f'{self.name} has walked {steps}  steps')