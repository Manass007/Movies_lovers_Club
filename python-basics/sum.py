number = [10, 25, 5, 40, 15]

total = 0
for num in number:
    total += num

minimum = number[0]
for num in number:
    if num < minimum:
        minimum = num

maximum =number[0]
for num in number:
    if num > maximum:
        maximum = num

largest = number[0]        
sec_large = number[0]
for num in number:
    if num > sec_large:
        sec_large = largest
        largest = num
    elif num != largest and sec_large > largest:
        sec_large = num
        

text = "programming"

frequency = {}

for C in text:
    if C in frequency:
        frequency[C] += 1
    else:
        frequency[C] = 1 

num = 6

for i in range(1, 11):
    if (num * 1) % 5 == 0:
        continue
    print(num, "x", i, "=", num * i)

        



print("sum: ", total)
print("maximum: ", maximum)
print("minimum: ", minimum)
print("second largest: ", sec_large)
print("frequnecy fo Character in string: ", frequency)


