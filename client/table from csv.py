# begin the table
print("<table>")

infile = open("test 3 column.csv","r")
for line in infile:
    row = line.split(",")
    print("<tr>")
    for i in row.count:
        print("<td>%s</td>" % row[i])
    print("</tr>")


# end the table
print("</table>")