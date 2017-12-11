CC = gcc
FLAGS = -Wall

%: %.c
	$(CC) $< $(FLAGS) -o $@.o
	./$@.o

search: *.c
	@read -p "Enter problem title: " problem; \
	head -n 1 $^ 

clean:
	rm -f *.o