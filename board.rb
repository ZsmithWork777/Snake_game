class Board 
    attr_reader :width, :height 

def initialize (width, height)   
    @width = width 
    @height = height 
end 

def draw(snake, food )
    (0...height).each do |y|
        row= (0...width).map do |x|
            if snake.segments.include?([x,y])
                "0" # draw a segment
            elsif food.position == [x, y]
                "*"
            else
                "." # empty space 
            end 
        end 
        puts row.join 
    end 
end
end 