# Tuple Packing
t = 1,"Sam",21
print("Packed Tuple:", t)

# Tuple Unpacking
Id, Name, age = t
print("Unpacked Values:")
print("Id =", Id)
print("Name=", Name)
print("age =", age)

# Nested Tuple
nested = (1, (2, 3), 4)
print("Nested Tuple:", nested)

print("Inner Tuple:", nested[1])
print("First element of inner tuple:", nested[1][0])
