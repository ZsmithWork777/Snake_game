class Snake
    attr_reader:segments, :direction
 DELTAS = { 
up: [0, -1], 
 down: [0, 1],
left: [-1, 0], 
right:[1, 0]}

 def initialize (x,y)
    # startiing body (3 blocks long)
    @segments = [[x,y], [x -1, y ], [x -2, y]]
    @direction = :right 
    @grow_pending = 0 
     end 


def head 
    @segments.first
end 

def change_direction(new_dir) 
    return unless DELTAS.Key?(new_dir)
    opposite= {up: :down, down: :up, left: :right, right: :left }
    return if opposite[@direction] == new_dir # dont reverse 
    @direction = new_dir 
end 

def move
    dx, dy = DELTAS[@direction]
    new_head = [head[0] + dx, head[1] + dy]
    @segments.unshift(new_head)
    if @grow_pending > 0 
        @growing_pending -= 1 
    else 
        @segments.pop
    end 
end 

def grow(n = 1) 
    @grow_pending += n
end 
def collides_with_self? 
    @segments[1..].include?(head)
end 
end 