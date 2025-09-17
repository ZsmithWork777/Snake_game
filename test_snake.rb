# test_snake.rb
require_relative 'snake'
require_relative 'board'
require_relative  'food'
require_relative  'game'
s = Snake.new(5, 5)
b = Board.new(10, 10)   # width 10, height 10

puts "Initial board:"
b.draw(s)               # <-- draw the grid with the snake

s.move
puts "\nAfter one move:"
b.draw(s, food)