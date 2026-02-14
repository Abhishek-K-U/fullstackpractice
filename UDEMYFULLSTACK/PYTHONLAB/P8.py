from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def draw(self):
        pass
class Rectangle(Shape):
    def area(self):
        print("Area of Rectangle = length × breadth")
    def draw(self):
        print("Drawing a Rectangle")

class Circle(Shape):
    def area(self):
        print("Area of Circle = π × r × r")
    def draw(self):
        print("Drawing a Circle")

r = Rectangle()
r.area()
r.draw()

c = Circle()
c.area()
c.draw()
