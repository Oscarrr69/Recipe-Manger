puts '🧀 Seeding data...'
15.times do
  User.create!(
    username: Faker::Internet.username(specifier: 8..12),
    email: Faker::Internet.email,
    password: 'password'
  )
end


30.times do
  Recipe.create!(
    title: Faker::Food.dish,
    instructions: Faker::Food.description,
    minutes_to_complete: Faker::Number.between(from: 10, to: 90)
  )
end



users = User.all
recipes = Recipe.all
20.times do
  Favorite.create!(
    origin: Faker::Address.country,
    comment: Faker::Lorem.sentence,
    user: users.sample,
    recipe: recipes.sample
  )
end

puts '✅ Done seeding'

