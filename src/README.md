# Simple Chatty Bot

## Stage 1/5: Chatty Bot welcomes you

###### Description
Digital personal assistants help people to drive cars, plan their day, buy something online. In a sense, they are simplified versions of artificial intelligence with whom you can talk.

In this project, I have developed step by step a simple bot that will help you study programming.

###### Objective
For the first stage, I have written a bot who displays a greeting, its name, and the date of its creation. First impressions count!

My program prints the following lines:  

Hello! My name is ZubBot.  
I was created in 2022.

###### Example
Example 1: output of program

Output:  

Hello! My name is ZubBot.  
I was created in 2022.  

## Stage 2/5: Print your name

###### Description

The greeting part is great, but chatbots are also supposed to interact with a user. It's time to implement this functionality.

###### Objectives

At this stage, I introduce myself to the bot so that it can greet me by my name.

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
What a great name you have, {my_name}!

Instead of {my_name}, the bot must print my name entered from the standard input.

###### Example 1: an example of the program

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
-> Dmytro  
What a great name you have, Dmytro!  

## Stage 3/5: Guess the age

###### Description

Keep improving my bot by developing new skills for it. I suggest a simple guessing game that will predict the age of a user.

It's based on a simple math trick. First, take a look at this formula:

`age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105`  

The numbers `remainder3`, `remainder5` and `remainder7` are the remainders of division by 3, 5 and 7 respectively.

It turns out that for each number ranging from 0 to 104 the calculation will result in the number itself. This perfectly fits the ordinary age range, doesn't it? So, I ask a user for the remainders and use them to guess the age!

###### Objectives

At this stage, I introduce myself to the bot. It will greet me by my name and then try to guess your age using arithmetic operations.

My program should print the following lines:

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
What a great name you have, Dmytro!  
Let me guess your age.  
Enter remainders of dividing your age by 3, 5 and 7.  
Your age is {your_age}; that's a good time to start programming!  

Read three numbers from the standard input. Assume that all the numbers will be given on separate lines.

Instead of {your_age}, the bot will print the age determined according to the special formula discussed above.

###### Examples

Example 1: a dialogue with the bot  

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
-> Dmytro  
What a great name you have, Dmytro!  
Let me guess your age.  
Enter remainders of dividing your age by 3, 5 and 7.  
-> 1  
-> 2  
-> 1  
Your age is 22; that's a good time to start programming!

## Stage 4/5: Learning numbers

###### Description

Now I will teach my bot to count. It's going to become an expert in numbers!

###### Objectives
At this stage, I have programed the bot to count from 0 to any positive number users enter.

###### Examples

Example 1: a dialogue with the new version of the bot  

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
-> Dmytro  
What a great name you have, Dmytro!  
Let me guess your age.  
Enter remainders of dividing your age by 3, 5 and 7.  
-> 1  
-> 2  
-> 1  
Your age is 22; that's a good time to start programming!  
Now I will prove to you that I can count to any number you want.  
-> 5  
0 !  
1 !  
2 !  
3 !  
4 !  
5 !  
Completed, have a nice day! 

Note: each number starts with a new line, and after a number, the bot should print the exclamation mark.

## Stage 5/5: Multiple choice

###### Description
At the final stage, I have improved my simple bot so that it can give you a test and check your answers. The test is a multiple-choice quiz about programming. My bot has to repeat the test until you answer correctly and congratulate you upon completion.

###### Objective
My bot asks anything, but there are two rules for output:

* the line with the test should end with the question mark character;
* an option starts with a digit followed by the dot (`1.`, `2.`, `3.`, `4.`)
* If a user enters an incorrect answer, the bot may print a message:

`Please, try again.`

The program should stop on the correct answer and print `Congratulations, have a nice day!` at the end.

###### Example

Example 1: a dialogue with the final version of my bot  

Hello! My name is ZubBot.  
I was created in 2022.  
Please, remind me your name.  
-> Dmytro  
What a great name you have, Dmytro!  
Let me guess your age.  
Enter remainders of dividing your age by 3, 5 and 7.  
-> 1  
-> 2  
-> 1  
Your age is 22: that's a good time to start programming!  
Now I will prove to you that I can count to any number you want.  
-> 3  
0 !  
1 !  
2 !  
3 !  
Let's test your programming knowledge.  
Why do we use methods?  
1. To repeat a statement multiple times.  
2. To decompose a program into several small subroutines.  
3. To determine the execution time of a program.  
4. To interrupt the execution of a program.

-> 4  
Please, try again.  
-> 2  
Completed, have a nice day!  
Congratulations, have a nice day!  

The program must end with the Congratulations, have a nice day! message.