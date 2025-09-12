class Food 
    attr_reader :position 

    def initialize (board)
        @board = board 
        @postition = random_position 
    end 

    def random_position 
        [rand(@board.width), rand(@board.height)]
    end 

    def respawn(snake_segements)
        begin 
            @position = random_position 
        end while snake_segments.include?(@position)
    end 
end 