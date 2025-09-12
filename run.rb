require_relative 'game'

game = Game.new(10, 10)

loop do 
    system("clear")
    game.tick 
    game.draw 
    sleep 0.7
end 