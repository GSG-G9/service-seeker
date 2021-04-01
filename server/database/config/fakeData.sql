INSERT INTO users(
    username,
    email,
    password,
    mobile,
    location,
    avatar,
    role
  )
VALUES (
    'Reinald',
    'rhrishanok0@google.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '959-398-7264',
    '2878 Di Loreto Road',
    'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
    'provider'
  ),
  (
    'Melicent',
    'mllewelyn1@ucoz.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '124-136-6347',
    '0724 Kim Crossing',
    'https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200445/36649700-man-avatar-user-picture-cartoon-character-vector-illustration.jpg',
    'user'
  ),
  (
    'Dugald',
    'dstrotone2@umich.edu',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '697-350-0993',
    '76 Birchwood Trail',
    'https://cdn0.iconfinder.com/data/icons/male-profession-flat/32/engineer-512.png',
    'provider'
  ),
  (
    'Shelli',
    'slamzed3@gnu.org',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '429-847-1775',
    '12437 Menomonie Court',
    'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png',
    'user'
  );
INSERT INTO providers(
    user_id,
    bio,
    price_houer,
    availability,
    rating
  )
VALUES (
    1,
    'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    4.6,
    true,
    5
  ),
  (
    3,
    'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    7.8,
    true,
    3
  );
INSERT INTO ordes_request(
    user_id,
    provider_id,
    decription,
    state
  )
VALUES(
    1,
    1,
    'Need to maintenance to my a garden wall',
    'pending'
  ),
  (
    3,
    2,
    'Need to maintenance kitchen supplier',
    'accepted'
  );
INSERT INTO orders(
    ordes_request_id,
      start_date,
    pasued_date,
    state,
    arrive_time,
    houer_number,
    resources_price,
    total_bill_price
  )VALUES(
    1,
    null,
    null,
    'accepted',
    '16:10:45',
    null,
    null,
    null
  ),(
    2,
    '2021-04-15 14:30:10',
    '2021-04-15 15:20:10',
    'completed',
    '13:20:10',
    6.2,
    100.6,
    149.1
  );
  INSERT INTO notification(
    user_id,
    decription
  )VALUES(
    1,
    'order request number 2 completed'
  ),(
    2,
    'order request number 1 canceled'
  );
  
  