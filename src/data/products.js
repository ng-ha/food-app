const start = new Date(2022, 1, 1);
const end = new Date();

function randomDate(start = new Date(2022, 1, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const products = [
  {
    _id: '1',
    name: 'Grilled fish of the day',
    description:
      "This vibrant kale salad is a treat year-round. I pile it high with a rainbow of crunchy veggies, toasted seeds, creamy avocado, and savory roasted chickpeas. Doused in a tangy carrot ginger dressing, it's hearty enough to be a meal on its own.",
    image: require('../../assets/images/q1.png'),
    price: 29.5,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Vega',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `Great mains, pity about the chips. Came for lunch with my sister. We loved our Thai-style mains which were amazing with lots of flavour, very impressive for a vegetarian restaurant. But the service was below average and the chips were too terrible to finish. When we arrived at 1.40, we had to wait 20 minutes while they got our table ready. OK, so we didn't have a reservation, but the restaurant was only half full. There was no reason to make us wait at all. We ordered the chips as a side dish and they looked delicious. But, when we tasted them, they were overcooked and swimming in oil so we left most of them. We expected a lot more for $10! When the waiter asked if everything was ok, we said we really didn't like the chips and he said 'That's funny, I love them' and that was it. He didn't offer us anything else or take them off our bill. Also, when we didn't leave a tip, he looked annoyed. I was really excited about visiting Vega, and the mains were just fantastic, but the rest of the experience was really disappointing.`,
      },
      {
        username: 'Mohammad Kridly',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `Good experience in a Turkish restaurant FIRINCI. I went with my colleague there last Friday, they welcomed us and found us a good table which had a view to the kitchen for seeing the chiefs while working in. As a side menu they brought us a season salat, a green salad and yogurt that they famous for. We ordered steak with mushroom sos and chicken wings with special sos which were so delicious. All the time waiter were asking us if everything ok and they made up what we complained, they were so helpful. The thing that we didn't expected is the pill was very expensive. I was really excited about visiting a Turkish restaurant but I'll thing a lot before trying it another time because going to this tip of restaurant needs a big budget. If their prices had been realistic I would go there another time.`,
      },
      {
        username: 'Trang Luu',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `Yes, I had a very bad meal at one of my favorite restaurants, it was with a salad, I order it because it sound fresh and sweet, but when it came, the salad was served with an awkward kind of cheese, in the minute I try it, I almost return the bite, it was awful, I gotta mention that I haven't tried that kind of cheese before and I will never try it again. I can even eat it, so yes i had a very bad meal before`,
      },
      {
        username: 'ZARA_MH',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `A few months ago I went to dinner with my boyfriend. The atmosphere of the restaurant was excellent, the waiting time was pleasant and the attention was incredible. When we arrived there was no line to order so we immediately ordered 2 cups of chocolate.After ordering, we looked for a table and waited around 10 minutes for the hot choclate to arrive, while we appreciated the music that set the place. We really recommend the restaurant, because the taste of the food is incredible, the prices are affordable and the atmosphere and attention from the staff is amazing.`,
      },
      {
        username: 'EMF_12',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `For dinner, I went there with my girlfriend. At first sight, the place was a little messy and unclean. \nWe both ordered a lasagna special, which was delicious and had just come out of the oven. A bit oily but just on edge. The attendant was kind, and the food arrived in 20 minutes, which I consider a prudent time to cook that dishes. Overall, it was a good experience, and I would go again.`,
      },
      {
        username: 'Alvin Chau',
        rating: '5',
        createdAt: randomDate().getTime(),
        content:
          "Few months ago, I went to a Thai restaurant in Saigon city with my old colleagues. I was very impressive by the it's architecture even it places in a small alley inside the downtown. This restaurant is one of the famous restaurant in the city, hence it seems always full of customers. We had to wait around 30 minutes to order our foods. It's worth the wait, the foods and drinks are delicious, the side dishes with a little sweetness and main course are really spicy but I love that taste a lot.",
      },
      {
        username: 'Ilianny_Alexis',
        rating: '2',
        createdAt: randomDate().getTime(),
        content: `If you ask me, if I have had an experience like this. The answer is "Yes" unfortunately there are restaurants which don't know the meaning of good cooking and also customer service, they treat you as a beggar.`,
      },
    ],
  },
  {
    _id: '2',
    name: 'Steak with chips or salad',
    description:
      'This lightened-up rendition of classic potato salad has a luscious Greek yogurt dressing with just a bit of mayo mixed in. It’s the perfect make-ahead salad, as the flavor deepens as it sits in the fridge.',
    image: require('../../assets/images/q2.png'),
    price: 15.99,
    countInStock: 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Azhar13',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `Unfortunately this happened several times in different occasion. For example, me and my husband were in a road trip from Muscat to Sur, a far east costal town, when we stopped for a quick meal at one of the local restaurants. It has a great sea view with a spectacular outdoor sitting area. My husband ordered a seafood pizza and I ordered a tuna salad. The service was good and the staff were friendly. The food was served within a reasonable time. My husband enjoyed his pizza. He said it was delicious and flavored. I was disappointed because my tuna salad was awful and not fresh at all. However when the waiter asked us if every thing was good, I mentioned for him that the salad was totally unexpected and I feel so bad about it. He was very polit and apologized for that. He offer me another tuna salad with a complementary fresh orange juice. The second tuna salad was great and well presented with fresh and juicy vegetables. I enjoyed my meal and the sea view. We tipped the waiter generously. I'll consider visiting this restaurant in future for sure and I'll recommend it to my friends and family.`,
      },
      {
        username: 'YuliaMelenchuk',
        rating: '1',
        createdAt: randomDate().getTime(),
        content: `Unfortunately I have. It was about year ago. I ordered pizza and I expected that it was delicious. But when I tried it I was confused. There was so much oil and sause. I could not eat it.`,
      },
      {
        username: 'purporpp',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `i really doesn't care much the flavour about food, if im hungry, i like everything, even if it is cold, but one day, i had to wait so mucho in the queue just for a hot dog, dude. i was really annoying and dissapointed about that attention. besides, that place in a wrong way say much about the local.`,
      },
      {
        username: 'Rita25',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `Yeah definitely as we all do, In fact I've lost counts of how many times I've experienced bad service and inedible dishes. But the worst that beats them all was when we went to a Mexican Restaurant packed with customers and long queues, It took them almost an hour to get our table ready. We were already starving to death and mouth drooping to get a taste of quesadillas. When we finally had our ordered we were excited to dig in, the food was too oily and it wasn't worth the price. Though the place had a relaxing ambiance and good service the waitress was accomodating. That was one pricey restaurant. I never understood why there was a long queues. Perhaps It was just overrated since it is located in a bustling city. Anyway I love mexican food I've been to many mexican restaurant that served mouth watering dishes in a reasonable price.`,
      },
      {
        username: 'Nandar Su Hlaing',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `Yes, I had a bad experience in a restaurant last week. We ordered two bowls of traditional noddle. The taste was normal, but the price is very high, and they also reduced the portion of the food in all dishes than others. I have got annoyed having in that restaurant.`,
      },
      {
        username: 'VadzimPoe',
        rating: '2',
        createdAt: randomDate().getTime(),
        content: `Small portions, gloomy atmosphere and a one waitress for the hole restaurant. This summer my family and I visited Grodno and in our first evening we decided to go to a restaurant of the Georgian cuisine 'Old Tbilisi'. Firstly, the enter to the restaurant was on a untidy backyard. Secondly, it was dark inside and flavor was strange. There were only one waitress for the hole restaurant. Although restaurant was not so big and there were not so many customers, she coped with her work hardly. So we had to wait about twenty minutes until our order only was taken. I assume, the mains wasn't fresh and cookers just warmed them up. Also portions were too small and I stayed hungry. There was only one small piece of meat in my pilau and cucumber slices in salad were so thin. As a result, we stayed disappointed after this dinner.`,
      },
    ],
  },
  {
    _id: '3',
    name: 'Homemade beef burger',
    description:
      'This summery bean salad is incredibly versatile. Dress it up with a soft-boiled egg or chickpeas to make it a meal, or serve the mix of potatoes, green beans, and lemony dressing as a simple grilling side.',
    image: require('../../assets/images/q3.png'),
    price: 9.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'farhadwahaj',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `My friends and I are living abroad, and whenever great news or thing is happening regarding our business, the one who has received the great news has to bring all of us to the restaurant. Last Friday it was the turn of one of my friends, and as usual to gather in a place, and took a vegan to the purpose place we were 5 persons. We reached over there in an hour at almost 7:23 PM, there are always rash and crowded people, but by luck, we reserved one table and ordered a variety of delicious food, such as rice, fry mate, role mate, and fried chicken. The orders took approximately 45 minutes and we came exhausted to wait for so long to receive our food on the table. The fry mate was more delicious and the flavor was so tasty, and the rice was great too and delicious, however, the roll mate was too oily and had an awful test. As other people were waiting for reserving tables and to give their orders, we left the restaurant swiftly to the stand people. When the bill came it was surprising it was about 20000 PK which is much more than the normal restaurant in the city. However, my friend paid the bill including a tip of about 20500 PK.`,
      },
      {
        username: 'ryhn',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `There was so distant to my home but I loved there because I was able to get away from home but I missed to my family when I was there. in now I am studying for pass the proicieny exam I hope pass it. that's so from me thanks for listening to me.`,
      },
      {
        username: 'Noldea',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `One day, I went to a restaurant near my home which just have reopened. They had "nem lụi" as their main course (I'm a Vietnamese). Back then before the close, I liked their "nem lụi" a lot. It had the sweetness of the meat and it just so delicious. But when I try that again, the quality dropped heavily. It was SALTY. That's not even what the average "nem lụi" would have. And until now I haven't go to that place again.`,
      },
      {
        username: 'marwan297',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `In the first at my university, I went to a restaurant in the front of the university, I ordered a dish of negresco but it wasn't good so I had to choose another thing i could eat, and i had to pay more than i expected. The service was good not excellent and the prices were not bad`,
      },
      {
        username: ' Fzt_abidin',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `yes, i have, actually, I am curious about the new food because of that usually i get disappointing. I love to try new food or beverage. One-time i went to a restaurant whose name is Karadeniz Döner, That place is so famous in İstanbul however, i didn't like much. Mains was good but no service and no side dishes`,
      },
    ],
  },
  {
    _id: '4',
    name: 'Bistecca alla Fiorentina (Florentine Steak)',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    image: require('../../assets/images/q4.png'),
    price: 25.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [],
  },
  {
    _id: '5',
    name: 'Caprese Salad Wreath ',
    description:
      "Sometimes when you're craving something indulgent, the drive-thru just ain't gonna cut it. Sure, nothing can beat the convenience, but these saucy, cheesy burgers will be worth the extra effort. Simmering the patties in chili infuses them with the spicy sauce and makes them super tender. ",
    image: require('../../assets/images/q5.png'),
    price: 19.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Van wong',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `Yes, so often, in order to earn more money. There is a restaurant that orders cheap food for customers, but it is not fresh food, so I got sick from that.`,
      },
      {
        username: 'chemistryteacher',
        rating: '2',
        createdAt: randomDate().getTime(),
        content: `I and my family went to restaurant one month ago. The staff was unhelpful and the food was terrible. We ate them because we were hungry but unfortunately wasn't delicious.`,
      },
      {
        username: 'sempresere',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `I have never had a totally bad experience in a restaurant. Obviously, I ate in some places where the food was better than in other restaurants, but I have never had an awful experience and I have never met rude waiters. I don't have a favorite restaurant because I like to change and to try always new experiences. I think that the best meal I have ever had was in USA in 2015. I was with my best friend and her aunt. A friend of her aunt, who was Indian, took us to Princeton because he wanted us to try Indian food in a typical Indian restaurant. In that restaurant I had the best food experience of my life! I really love Indian food because it is full of flavors and smells, really delicious! In Italy I like those restaurants that cook traditional Italian food, such as Lasagna.`,
      },
      {
        username: 'Suraj paliwal',
        rating: '1',
        createdAt: randomDate().getTime(),
        content: `Yes I have have many times faces bad experience in restaurant. One of this is two weeks ago I ordered chicken masala, biryani and roti. That's very bad. I never experienced such a food. That is terrific. And terrible food I have ever faced.`,
      },
      {
        username: 'zoedestriau',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `I will write about the best meal I have ever had !! I live in Paris and for my last birthday I went to a luxury restaurant called Matsuri. The food is Japanese style and they have a chef who is famous in this area. The side was great but the main dish was incredible. I ordered sashimi and a type of sushi that was similar to tempura and for desert I ordered mochi. Mochi is a type of cake from rice and red beans paste. I thinks I will return there because it was so good !`,
      },
    ],
  },
  {
    _id: '6',
    name: 'Calat "APELSIN" with chicken and mushrooms',
    description:
      'Prepare the products for the salad. Boil the chicken in salt water until ready. Get the eggs in. Kartofel and sea pluck to the brine, then cool them and clean the peel. Roast the champignons to the brim on a vegetable oil. Let it taste good. Collect the salad. Put a ring on the clean plate. The first layer of salad is grated potatoes and a mayonnaise thin net. The second layer of salad is cubed chicken meat and mayonnaise thin net. In the third layer, we turn off the fried champignons. The fourth layer is grated egg yolks and again mayonnaise cetochka. The last layer I put on is a tart grater of carrots. Remove the precca ring. Ophopmite the salad with a tert egg white. Got ! Out of the given valority of products got two small salads. You can make one big and equip the same.',
    image: require('../../assets/images/q6.png'),
    price: 29.89,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Khadija_Chandarrou',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `I decided to try out the restaurant near the school where I work. It always smells good when I go to work. Once, I had lunch there, and I went for pizza cause it's my favorite dish. I had to wait more than 10 minutes to get my dish ready. The thing I don't like. But the pizza was very tasty, that leads me to think about coming back and try out other dishes. But it would be better if they serve people more faster.`,
      },
      {
        username: 'GiulianaAndy',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `Yes, I have. Here it is: At around 5 years ago I went a restaurant with my family, the mains were amazing with lots of flavor, it was impressive. But if you ask me about the side dish and the service, it was awful. When my family and I arrived at the restaurant at 2:30, we had to wait 30 minutes while they attend us, and the restaurant was only half full. There was no reason to make is wait at all. We ordered the side dish and the main they looked delicious. But, when we tasted the side dish, it was overcooked and swimming in oil so we didn't finish it. When the waitress asked if everything was okay, we complained about the side dish and she didn't care about that. She didn't offer us anything else or take the side dish off our bill. Also, when we didn't leave a tip, she looked disgusted.`,
      },
      {
        username: 'Ehsan',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `yes, I would like to try different restaurants each time. unfortunately, some of them aren't good.`,
      },
    ],
  },
  {
    _id: '7',
    name: 'Summer Asian Slaw',
    description:
      'Make this salad for your next picnic, and it will be a guaranteed hit. A tahini miso dressing gives it a creamy umami coating, while peaches add juicy pops of sweetness. I finish it with toasted pepitas for crunch. ',
    image: require('../../assets/images/q7.png'),
    price: 39.5,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [],
  },
  {
    _id: '8',
    name: 'Best Broccoli Salad',
    description:
      "You won't miss the bacon in this lightened-up take on classic broccoli salad. Smoky roasted nuts take its place, adding delectable savory bites. A lightly creamy, sweet & tangy dressing takes the whole thing over the top.",
    image: require('../../assets/images/q8.png'),
    price: 19.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'emidepegaso',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `nice`,
      },
      {
        username: 'Camila Abreu',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `Countless times, one in particular disappointed me a lot. I went to a restaurant specializing in chicken, the dishes were excessively large and exchange between them was too fast, so a lot of food was a thrown away :(`,
      },
      {
        username: 'Dibesciak',
        rating: '1',
        createdAt: randomDate().getTime(),
        content: `I dont remember if I ever had a bad meal in restaurant, sometimes Is just happen that you receiving different meal that you imagine I would get when you have ordered the food. The very bad experience I have recently when I ordered food from Deliveroo, I ordered portion of Ramen and Gyoza from Take-away restaurant close to me. The food was terrible , I could not eat it at all. After I checked reviews of this shop in google, they have only 2 stars out of 5 , I could check this earlier ;P`,
      },
    ],
  },
  {
    _id: '9',
    name: 'Shredded Brussels Sprout Salad',
    description:
      "As soon as the temperature starts to dip in the fall, I look forward to making this salad. Made with just 7 ingredients, it's a breeze to put together, but a bright lemon dressing, Parmesan cheese, pine nuts, and dried cranberries make it zippy, fresh, and satisfying.",
    image: require('../../assets/images/q9.png'),
    price: 9.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Frank Cuello',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `I don't recall to have a bad meal in a restaurant recently. The most negative experience that I have was in a restaurant where the food didn't have a great taste but the atmosphere was so good that it overcome the bad things of the restaurant.`,
      },
    ],
  },
  {
    _id: '10',
    name: 'Chicken Burger',
    description:
      'These chicken patties are seasoned with smoked paprika and topped with crunchy, bright coleslaw to really give beef burgers a run for their money. Finish them with creamy avocado, spicy red onion, and cheddar and jalapeño before sandwiching all of it between buttery brioche buns for the ultimate bite.',
    image: require('../../assets/images/q10.png'),
    price: 15.89,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Liyu',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `The air conditioner is too cold, The steak is too old. I really like watch the 《Ramsay's Kitchen Nightmares》show before I came to Singapore. I was so impressed by the chef Gordon Ramsay in that show, I think he has a high standard for all food. So when I know Singapore have a restaurant is belong to Chef Gordon, I was so expected. So I came for dinner with my friend, we all loved the mid-rate steak, so when ordered two mid-rate steaks, the food arrived fast. But when took the first bite, we are so disappointed, because both steaks are too old, that's like a well-done steak! So we tell this feedback to the waiters, but he just says, we will tell the chef. Then until we leave, nothing happened, no one tells me why our steak tastes too old. We also ordered a bottle of wine, but the tire condition is too cold for us, so we have to take away the wine, but without the air conditioner's temperature problem, the environment is better than the food! All in all, we are so disappointed. Hope they can improve the service skill and solve the steak problems.`,
      },
    ],
  },
  {
    _id: '11',
    name: 'Mediterranean Chickpea Salad',
    description:
      "Chopped Medjool dates and aromatic cumin add a surprising sweet twist to this hearty chickpea salad. Topped with roasted red peppers, grape tomatoes, and a big sprinkle of goat cheese, it's a good salad to pack for lunch, but it's also a guaranteed hit at any gathering.",
    image: require('../../assets/images/q11.png'),
    price: 25.29,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'YED',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `No, I don t remember I had a bad meal in a restaurant. But once in an indian restaurant-I really love indian food- my child ordered a chocolate kind of big pancake ... but it was chocolate and cheese... so she didn't eat it and nobody accepted to share it with her. The waiter was very surprised that we didn't like it.`,
      },
    ],
  },
  {
    _id: '12',
    name: ' Watermelon Salad with Feta and Mint',
    description:
      'Make this ultra-refreshing salad on hot summer days! Creamy avocado, tangy feta, and bright lime wonderfully accent cool, juicy melon and cucumber. A handful of fresh herbs is the perfect finishing touch.',
    image: require('../../assets/images/q12.png'),
    price: 7.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'hassainar',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `I and my friends visited a restaurant long ago at my home town. we ordered for Biriyani, a south Indian dish made with meat and rice. Biriyani was so terrible, it was cooked a day before and having some bad smell. Nobody eat fully and left on the plate. we complained to the manager and he had no answer to us than saying sorry. Later he gave some discount on the bill. That was very bad experience in my life and there are many bad experience in my life.`,
      },
      {
        username: 'Axew',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `My family and I went to a restaurant when we were on a vacation . It is located near the beach . I love the scenery view there . You can enjoy it while eating food . They serve seafood dish such as prawns and crabs . We ordered a set of the menu . Once it arrived , I was mesmerized by the presentation of the food . It gave me a beach vibes along with it . It tasted really good and delicious . We all really satisfied with the food . After all , I rate it 10 out of 10 as I love everything that being serve there . I really hope I can go there someday again in the future`,
      },
      {
        username: 'jose luis torr',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `Yes, of course. I remmember 3 years ago my friend and I went to a new restaurant near to my house . We listened about the deliciuos sandwinches. Unfortunaletly when we ordered , the waitress said they have only two of these . We didn't have another options so we decided go out . I prefer to choose beetween many alternatives to eat when I go for a lunch with my friends.`,
      },
    ],
  },
  {
    _id: '13',
    name: 'Greek-Inspired Salmon Burgers',
    description:
      "OK, so pureeing a salmon fillet with egg isn't the sexiest process, but it's key in helping these patties hold together. You'll be so glad you did when you're eating this light, flavorful salmon burger sandwiched in fluffy pita.",
    image: require('../../assets/images/q13.png'),
    price: 4.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [],
  },
  {
    _id: '14',
    name: "Copycat Carl's Jr. Bacon Western Cheeseburger",
    description:
      "There are a ton of famous fast food burgers, but the Bacon Western Cheeseburger holds a special place in our hearts (and not just because it's really fun to say). Top with tangy BBQ sauce and crispy onion rings, and you're on your way to burger heaven.",
    image: require('../../assets/images/q14.png'),
    price: 12.49,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Gao',
        rating: '2',
        createdAt: randomDate().getTime(),
        content: `Came for a celebration with my husband. We loved Western culinary so we go to a Wine House for some special days. I has been there 3 times before and the experience was amazing. The mains were fantastic which were amazing with lots of flavours and side dishes are quite good. However, the 4th time was terrible. I was so excited about smoked salmon with caviar so I order one. Unfortunately, this dish has been removed from the menu. It is a pity. Then I ordered some other dishes and they was off the menu. It is 7pm and it seems like we did not have many options. We have to try something new. The food delivered slowly and the taste was not so good. I believe that they have changed their chef. And another change was we had to order a bottle of wine instead of glasses. We was totally disappointed and I decided not to come back that restaurant anymore.`,
      },
    ],
  },
  {
    _id: '15',
    name: 'Pattypan Panzanella',
    description:
      "When you've made zucchini bread, zucchini cake, baked zucchini, and zucchini pizza, and you STILL have zucchini, make this panzanella. The grilled squash is a great jammy contrast to crisp cucumbers and bursty cherry tomatoes.",
    image: require('../../assets/images/q15.png'),
    price: 8.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'giukkkj',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `yes, i already had a bad meal, me and my family were in a restaurant very good and expensive, we thought that was the best restaurant that has ever existed, local appearance is beautiful, the place had a such good vibes,we ordered some potato with bacon, and was really delicious, actually the best part of this restaurant was the potato, cause after that, we asked three hamburgers, and was really bad, the meet was raw, the bread was withered, everything sucks, the bill gave like two hundred, and the price didn't equals the delay and then horrible hamburger . this was the worst situation that i have ever passed in a restaurant.`,
      },
    ],
  },
  {
    _id: '16',
    name: 'Grilled Potato Salad with Scallion Vinaigrette',
    description:
      "If you're grilling veggie burgers, make this summer salad right along with them. Not only are the potatoes grilled here, but the blueberries are too! A yummy grilled scallion vinaigrette, fresh herbs, and pickled onions accent this fun sweet/charred pairing.",
    image: require('../../assets/images/q16.png'),
    price: 5.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Abrarhussain',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `Yes, I have had a bad meal in a local vegetarian restaurant with my family. The outlook of the restaurant was nice and clean. The service of the restaurant was very slow. After a long wait we served with starter kababs ,the taste was not good and feeling like half cooked. The chicken curry was ok but too oily, and feel did not fresh taste. We paid the bill with a tip and came back home feeling unhappy.`,
      },
    ],
  },
  {
    _id: '17',
    name: 'Sweet Corn & Arugula Panzanella',
    description:
      "Panzanellas may be Italian bread salads, but this recipe's not all about the bread. Crisp, juicy sweet corn is front and center, playing perfectly off a tangy dressing and bitter greens. I use the corn raw, so this panzanella is super simple to toss together.",
    image: require('../../assets/images/q17.png'),
    price: 14.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'AulianFr',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `I don't remember the restaurant's name, but it is a small place in downtown Bandung where people usually hang out. I believe it's a pretty popular place for students because the place is cozy and the interior is wonderful. But this restaurant sets the price irrationally high. The foods were average and there was nothing special about them. I remember I ordered carbonara or something and it didn't taste as much as I had expected. The benefit-to-cost ratio was just too low. But I did really like the place and the atmosphere. Maybe that's the reason why people like to visit this place. They come for the vibe, not the food and the dishes are just for snacking while they do other things like chatting with their friends.`,
      },
      {
        username: 'John90',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `"Los cazadores", México In a weekend my mom and me were looking for some food beacuse we were running out of food at home so we decided to go to a restaurant nerby called "los cazadores". The staff was very polite with us, first good impression. All the dishes on the menu looked so delicious and we ordered some roast meat for both. When we tried our food it was overcooked and too salty so we asked to the waiter about this but he told us that he couldn't do anything about. The side dishes were very good so I could say that them saved our meal. We left less tip to the waiter because he didn't help us a lot but in other hand the sevice were great with good attitude. Maybe we'll back to try another dish like fish or salad.`,
      },
      {
        username: 'amelie.timmermans',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `I went to a restaurant named Tabl'o. It looked verry beautiful. When we came in someone leaded us to our seats, she was verry friendly. We ordered our mains, because we were verry hungry. It came verry fast, and it tasted really good. Excepteded for one of my friends, his order was overcooked. But the chef came and he immediately remade the dish. The service was fast and they were all super nice. We also left a big tip.`,
      },
    ],
  },
  {
    _id: '18',
    name: 'Quesadilla Burger',
    description:
      'Meet our new favorite way we cope with indecision, because no longer do you have to choose between a quesadilla or a burger. A chili- and jalapeño-spiced patty is *the* perfect filling for crispy fried tortillas.',
    image: require('../../assets/images/q18.png'),
    price: 9.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Fatii',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `One day, me and my friend went shoping in the old medina in my city 'Fez', after a long walk we both felt hangry, so we decided to eat some fast food, after a while a waiter offered to us to eat in his restaurant, he gave us a warm welcome, so we accepted his offer. the restaurant was small with small tables and plastic seats, we sat down and waiting for our order. After about 10 minutes the order was ready, so we began to eat, but before we finished our meals, the waiter gave another costomers but he didn't find any avaliable seats, so he tell us to give our places to the new customers even if we still eating, we were speechless, what he doing ... that make us laughing hardly. This waiter is just caring about money nothing else. but it was a great day`,
      },
    ],
  },
  {
    _id: '19',
    name: 'Jalapeño Popper Steak',
    description:
      "There's nothing better than jalapeño popper dip. Therefore, we stuff it in everything we can: pigs in a blanket, egg rolls, chicken, and now burgers. You're welcome.",
    image: require('../../assets/images/q19.png'),
    price: 18.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Fatii',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `One day, me and my friend went shoping in the old medina in my city 'Fez', after a long walk we both felt hangry, so we decided to eat some fast food, after a while a waiter offered to us to eat in his restaurant, he gave us a warm welcome, so we accepted his offer. the restaurant was small with small tables and plastic seats, we sat down and waiting for our order. After about 10 minutes the order was ready, so we began to eat, but before we finished our meals, the waiter gave another costomers but he didn't find any avaliable seats, so he tell us to give our places to the new customers even if we still eating, we were speechless, what he doing ... that make us laughing hardly. This waiter is just caring about money nothing else. but it was a great day`,
      },
    ],
  },
  {
    _id: '20',
    name: 'Portobello Mushroom Dish',
    description:
      "Marinating and roasting the portobellos makes them extremely flavorful and brings out all of their juices. (Bonus that there's no smoky grills to deal with for these burgers. 🙌) We love ours simply topped with honey mustard and some veggies, but a slice of white cheddar would be killer.",
    image: require('../../assets/images/q20.png'),
    price: 7.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'ceryan41',
        rating: '4',
        createdAt: randomDate().getTime(),
        content: `The resturant format is not suitable for me . I visited many diffrent place in my country and most of the delicious or interesting foods are on shabby place. No need to so much wait for service because there is no place to eat only cooking and service .`,
      },
      {
        username: 'Elham Barakat',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `2 years ago I went with my friend to a Pizza restaurant. We knew it from a flyer. Everything was looked delicious. There we received a warm welcome. We ordered one large pizza, chips and two cups of juice. We waited for 45min until our order arrived. It was a long time without reason. Everything was looked delicious, but the taste of pizza is not as pretty as the view. It was not well done and like a pie, not a pizza with a thick layer. We pretended as we like it and paid the bill and got out of there. The good thing was the chips were yummy and crunchy. After that, I didn't be tricked by a flyer.`,
      },
    ],
  },
  {
    _id: '21',
    name: 'Greek Stuffed Turkey Burgers',
    description:
      'Feta lovers, take note: We stuff these turkey patties with a whole square of salty, creamy feta to make our new favorite spin on a cheese-stuffed burger. Want more Greek-inspired burgers? Try our lamb burgers next.',
    image: require('../../assets/images/q21.png'),
    price: 19.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [],
  },
  {
    _id: '22',
    name: 'Spongebob-Inspired Krabby Patties',
    description:
      'A full steakhouse dinner between two buns. Just add A-1 and your steak frites dreams will come true. Need more? We love these steak frites bites for a fun party appetizer.',
    image: require('../../assets/images/q22.png'),
    price: 14.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Ling Wei Hui ',
        rating: '1',
        createdAt: randomDate().getTime(),
        content: `Yes,I used to come a restaurant but it's so bad. The food was so sour and not delicious. Beside, the servise was also bad and dirty. It's a bad memory for me. I will not go there again.`,
      },
    ],
  },
  {
    _id: '23',
    name: 'No-Bun Bruschetta Burgers',
    description:
      "Forget all the rumors you've heard about chicken burgers being dry and boring. Thanks to fresh basil, salty parm, and balsamic vinegar, these have so. much. flavor. And they're low-carb? It just doesn't get much better than that. If you're not ready to ditch the bun, but love the whole Italian vibe going on here, try our Chicken Parm Burgers next.",
    image: require('../../assets/images/q23.png'),
    price: 5.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Rodrigo Abrantes',
        rating: '1',
        createdAt: randomDate().getTime(),
        content: `Yes, many times. When the food is not good, the service is not good or the atmosphere is bad, the restaurant's evaluation will be terrible.
        `,
      },
    ],
  },
  {
    _id: '24',
    name: 'French Onion Soup',
    description:
      'We could write entire poems about French onion soup and all the ways we love to eat this rich, umami-packed classic. This burger has all that caramelized flavor we love—no spoons required. ',
    image: require('../../assets/images/q24.png'),
    price: 9.99,
    countInStock: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    reviews: [
      {
        username: 'Anara SN',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `Casa Del Gelato, Sousse / Tunisia **** Restaurant is good for everyone, especially for family with kids. They have outside and inside places for guests and playground for kids that become comfortable for couples with kids. You can try there most yummy Italian ice cream in Sousse city. The waiters are funny, always smile, and know English language. Dishes, drinks, cocktails are not expensive. You can also watch football matches there. If you are going to visit this place don't forget to order there a hookah. We've got relax and our kids were happy.`,
      },
      {
        username: 'zyinabkhalid',
        rating: '3',
        createdAt: randomDate().getTime(),
        content: `yeas, I got a bad experieance with my sisters at Italian resturant on my towne. the resturant wes full sence we arraived and this give us a good imprssion, but the sarvices and food test was disppointed. Also, the waiters was unhelpful.`,
      },
      {
        username: 'Easter',
        rating: '5',
        createdAt: randomDate().getTime(),
        content: `I also had this bad experience too in the last year, I was travelling with my families oversea, and we went to one restaurant in Spain, that's so awful, there was a half of waiter in front of the main, and no one came to ask us, we waited for 30 minutes at least, they were in racism discrimination, I was so annoyed about.`,
      },
    ],
  },
];

export default products;

// Math.floor(Math.random() * 6)

// Math.floor(Math.random() * (1000 - 100 + 1)) + 100
