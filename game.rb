require_relative'snake' 
require_relative'board' 
require_relative 'food'

 
class Game 
    def initialize(width,height)
        @board = Board.new( width, height) 
        @snake = Snake.new( width / 2, height / 2 )
        @food = Food.new(@board)
    end 

        def tick 
            @snake.move 

            if @snake.head == @food.position 
                @snake.grow 
                @food.respawn(@snake.segment)
            end 
        if out_of_bounds? || @snake.collides_with_self?
            puts "Game Over!"
            exit 
        end 
    end

    def draw 
        @board.draw(@snake, @food)
    end 
    
        private 
        def out_of_bounds?
            x, y = @snake.head
            x < 0 || x >= @board.width || y < 0 || y >= @board.height 
        end 

    end