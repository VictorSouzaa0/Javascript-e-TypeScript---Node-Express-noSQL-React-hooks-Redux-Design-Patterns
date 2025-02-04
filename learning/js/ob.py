class Me():
    def __init__(self,name,surname,age,addrress):
        self.name = name
        self.surname = surname
        self.age = age
        self.address = addrress

    def hello(self):
        return f'Olá me chamo {self.name} {self.surname}, atualmente tenho {self.age} e moro em {self.address} '
people1 = Me(name='Victor',surname='Souza',age=19,addrress='Campinas')
print(people1.hello())