const Review = (() => {
  let state = [
    {
      title: '피자',
      userId: 'kheeyaa',
      reviewId: 0,
      summary:
        '오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. ',
      content:
        '오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. 오늘은 피자를 먹었다. 아주 맛있었다. ',
      photos: [],
      tags: ['피자'],
      thumbnail: '../images/pizza.jpeg',
      ratings: 4.5,
      likes: ['jkrang1702', 'jkrang105', 'jkrang104', 'kheeyaa'],
      comments: [
        {
          commentId: 1,
          userId: 'jkrang1702',
          content: '너무 맛이 없네요',
        },
        {
          commentId: 2,
          userId: 'jkrang105',
          content: '난 맛있는데',
        },
      ],
      createdAt: new Date(2008, 11, 3),
      updatedAt: new Date(2008, 11, 3),
    },
    {
      title: '네트워크 학습서',
      userId: 'kheeyaa',
      reviewId: 1,
      summary:
        '네트워크 학습서 리뷰입니다. 내용이 알차요 읽어보세요. \n 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. ',
      content:
        '네트워크 학습서 리뷰입니다. 내용이 알차요 읽어보세요. \n 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. 내용이 알차요 읽어보세요. ',
      photos: [],
      tags: ['네트워크', '책', '추천'],
      ratings: 4.5,
      thumbnail: '../images/book.jpeg',
      likes: ['jkrang1702', 'jkrang105', 'jkrang104', 'kheeyaa'],
      comments: [
        {
          commentId: 1,
          userId: 'jkrang1702',
          content: '너무 맛이 없네요',
        },
        {
          commentId: 2,
          userId: 'jkrang105',
          content: '난 맛있는데',
        },
      ],
      createdAt: new Date(2008, 11, 3),
      updatedAt: new Date(2008, 11, 3),
    },
    {
      title: '강남 유명 케이크 가게',
      userId: 'jkrang104',
      reviewId: 2,
      summary:
        '특별한 날, 필요한 케이크! 추천합니다. 맛있어요! \n 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! ',
      content:
        '특별한 날, 필요한 케이크! 추천합니다. 맛있어요! \n 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! 맛있어요!맛있어요!맛있어요!맛있어요!맛있어요! ',
      photos: [],
      tags: ['케이크', '맛집'],
      thumbnail: '../images/cake.jpg',
      ratings: 5,
      likes: ['jkrang1702', 'jkrang105', 'jkrang104'],
      comments: [
        {
          commentId: 1,
          userId: 'jkrang1702',
          content: '너무 맛이 없네요',
        },
        {
          commentId: 2,
          userId: 'jkrang105',
          content: '난 맛있는데',
        },
      ],
      createdAt: new Date(2009, 11, 3),
      updatedAt: new Date(2009, 11, 3),
    },
    {
      title: '이건아니지... 아이스크림 비추',
      userId: 'jkrang1702',
      reviewId: 3,
      summary:
        '여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! ',
      content:
        '여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! 여기 아이스크림 먹지 마시오. 경고!! ',
      photos: [],
      tags: ['아이스크림', '비추'],
      thumbnail: '../images/icecream.jpeg',
      ratings: 1,
      likes: ['jkrang104', 'kheeyaa', 'kheeyaa1', 'kheeyaa2', 'kheeyaa3'],
      comments: [],
      createdAt: new Date(2010, 4, 14),
      updatedAt: new Date(2010, 4, 14),
    },
    {
      title: '하리포 신상 젤리',
      userId: 'jkrang104',
      reviewId: 4,
      summary:
        '하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  ',
      content:
        '하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  하리보 신상 젤리, 맛은 그냥 그래...  ',
      photos: [],
      tags: ['하리보', '추천'],
      thumbnail: '../images/haribo.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '아이폰14 리뷰',
      userId: 'jkrang104',
      reviewId: 5,
      summary:
        '아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? ',
      content:
        '아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? 아이폰14 신상! 이번에는 어떤 변화가 ..? ',
      photos: [],
      tags: ['아이폰', '전자기기'],
      thumbnail: '../images/iphone.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '갤럭시 z플립',
      userId: 'jkrang104',
      reviewId: 6,
      summary:
        '갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? ',
      content:
        '갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? 갤럭시 z플립 후기. 접는 핸드폰은 뭐가 좋을까요? ',
      photos: [],
      tags: ['갤럭시', '전자기기'],
      ratings: 4,
      likes: ['kheeyaa'],
      thumbnail: '../images/galaxy.jpeg',
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '에버랜드 실시간 후기',
      userId: 'jkrang104',
      reviewId: 7,
      summary:
        '에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드',
      content:
        '에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드 에버랜드 실시간 후기! 가을 에버랜드',
      photos: [],
      tags: ['가을 에버랜드', '놀이공원'],
      thumbnail: '../images/everland.jpeg',
      ratings: 2,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: 'i Mac 후기',
      userId: 'jkrang104',
      reviewId: 8,
      summary:
        'i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. ',
      content:
        'i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. i mac 후기입니다. ',
      photos: [],
      tags: ['아이맥', 'i mac', '전자기기'],
      thumbnail: '../images/imac.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '나이키',
      userId: 'jkrang104',
      reviewId: 9,
      summary:
        '나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. ',
      content:
        '나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. 나이키는 편하다. ',
      photos: [],
      tags: ['나이키'],
      thumbnail: '../images/nike.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '아디다스',
      userId: 'jkrang104',
      reviewId: 10,
      summary:
        '아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. ',
      content:
        '아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. 아디다스는 이쁘다. ',
      photos: [],
      tags: ['아디다스'],
      ratings: 2.5,
      thumbnail: '../images/adidas.jpeg',
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '라멘 맛집',
      userId: 'jkrang104',
      reviewId: 11,
      summary:
        '라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집!  ',
      content:
        '라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집! 라멘 맛집!  ',
      photos: [],
      tags: ['라멘', '맛집'],
      thumbnail: '../images/ramen.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '초밥 맛집',
      userId: 'jkrang104',
      reviewId: 12,
      summary:
        '초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 ',
      content:
        '초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 초밥 맛집! 강남역 최고 초밥맛집 ',
      photos: [],
      tags: ['초밥', '맛집'],
      thumbnail: '../images/sushi.jpeg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '토스트',
      userId: 'jkrang104',
      reviewId: 13,
      summary: '오늘은 토스트를 먹었다. 너무 맛있었다. 다음에 또 먹어야지',
      content: '오늘은 토스트를 먹었다. 너무 맛있었다. 다음에 또 먹어야지',
      photos: [],
      tags: ['토스트'],
      thumbnail: '../images/toast.jpeg',
      ratings: 4,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '순두부',
      userId: 'jkrang104',
      reviewId: 14,
      summary: '오늘은 담소에 가서 우렁이 순두부 찌개를 먹었다. 우렁이가 비려서 맛이 별로 없었다.',
      content: '오늘은 담소에 가서 우렁이 순두부 찌개를 먹었다. 우렁이가 비려서 맛이 별로 없었다.',
      photos: [],
      tags: ['순두부', '담소'],
      thumbnail: '../images/softtofu.jpeg',
      ratings: 2,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '찜닭',
      userId: 'seohey',
      reviewId: 15,
      summary: '찜닭과 누룽지를 먹었다. 오랜만에 먹어서 그런지 너무 맛잇었다. 다음에 또 먹어야지!',
      content: '찜닭과 누룽지를 먹었다. 오랜만에 먹어서 그런지 너무 맛잇었다. 다음에 또 먹어야지!',
      photos: [],
      tags: ['찜닭'],
      ratings: 4,
      likes: ['kheeyaa'],
      thumbnail: '../images/jjimdak.jpg',
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '탄탄멘',
      userId: 'jkrang104',
      reviewId: 16,
      summary: '탄탄멘을 먹었다. 맛이 없진 않았는데 파향이 짙어서 내겐 별로였다.',
      content: '탄탄멘을 먹었다. 맛이 없진 않았는데 파향이 짙어서 내겐 별로였다.',
      photos: [],
      tags: ['탄탄멘'],
      thumbnail: '../images/tantanmen.jpg',
      ratings: 2.5,
      likes: ['seohey'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '햄버거',
      userId: 'coolchaeyoung',
      reviewId: 17,
      summary: '오랜만에 햄버거를 먹어서 맛있었다. 하지만 배가 불러서 많이 먹지는 못했다.',
      content: '오랜만에 햄버거를 먹어서 맛있었다. 하지만 배가 불러서 많이 먹지는 못했다.',
      photos: [],
      tags: ['햄버거 강남 맛집'],
      ratings: 4,
      thumbnail: '../images/hamburger.jpg',
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '장인 닭갈비',
      userId: 'jkrang104',
      reviewId: 18,
      summary: '장인 닭갈비를 가서 먹었는데 맛있었다. 하지만 조금 매워서 1점 감점',
      content: '장인 닭갈비를 가서 먹었는데 맛있었다. 하지만 조금 매워서 1점 감점',
      photos: [],
      tags: ['장인 닭갈비', '닭갈비', '강남 맛집'],
      ratings: 4,
      likes: ['kheeyaa'],
      thumbnail: '../images/dakgalbi.jpg',
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '클라이밍',
      userId: 'seohey',
      reviewId: 19,
      summary: '오랜만에 친구들과 클라이밍을 했다. 재밌는 하루였다.',
      content: '오랜만에 친구들과 클라이밍을 했다. 재밌는 하루였다.',
      photos: [],
      tags: ['클라이밍'],
      ratings: 3.5,
      likes: ['kheeyaa'],
      comments: [],
      thumbnail: '../images/climbing.jpg',
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '곱창',
      userId: 'kheeyaa',
      reviewId: 20,
      summary: '곱창을 먹었다. 떡이 맛있엇다. 다음에 또 가야지',
      content: '곱창을 먹었다. 떡이 맛있엇다. 다음에 또 가야지',
      photos: [],
      tags: ['말뚝곱창', '구디 루프탑점'],
      ratings: 2.5,
      likes: ['kheeyaa'],
      thumbnail: '../images/gobchang.jpg',
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '방탈출 카페',
      userId: 'seohey',
      reviewId: 21,
      summary: '노 힌트로 12분 남기고 탈출했다. 역시 나는 수학천재소녀 데헷',
      content: '노 힌트로 12분 남기고 탈출했다. 역시 나는 수학천재소녀 데헷',
      photos: [],
      tags: ['방탈출', '제로월드 강남점', '포레스트'],
      ratings: 4.5,
      likes: ['kheeyaa', 'jkrang104', 'sosoyim', 'coolchaeyoung', 'joker77z', 'hanana1254'],
      thumbnail: '../images/bangescape.jpg',
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '육회',
      userId: 'jkrang104',
      reviewId: 22,
      summary: '육회를 먹었다. 맛이 없었다. 최악이야 ㅠㅠ',
      content: '육회를 먹었다. 맛이 없었다. 최악이야 ㅠㅠ',
      photos: [],
      tags: ['육회', '맛없음', '소고기'],
      ratings: 2.5,
      likes: ['kheeyaa'],
      thumbnail: '../images/beefsashimi.jpg',
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '뱀파이어 헌터 게임',
      userId: 'seohey',
      reviewId: 23,
      summary:
        '최소 3인부터 최대 12인까지 할 수 있는 마운팅, 트릭테이킹 카드게임이다. 룰이 간단하고 한 라운드가 짧아서 여럿이서 가볍게 파티 게임으로 즐길 수 있었다.',
      content:
        '최소 3인부터 최대 12인까지 할 수 있는 마운팅, 트릭테이킹 카드게임이다. 룰이 간단하고 한 라운드가 짧아서 여럿이서 가볍게 파티 게임으로 즐길 수 있었다.',
      photos: [],
      tags: ['보드게임', '뱀파이어 헌터', '보겜리뷰'],
      ratings: 4,
      likes: ['kheeyaa'],
      thumbnail: '../images/boardgame.jpg',
      comments: [],
      createdAt: new Date(2021, 10, 10),
      updatedAt: new Date(2021, 10, 10),
    },
    {
      title: '백신 접종',
      userId: 'seohey',
      reviewId: 24,
      summary:
        '다니엘의원에서 백신 2차 접종을 완료했다. 팔뚝이 조금 아픈 것 같은데 내일 몸살이 나지 않을지 걱정이다ㅠㅠ',
      content:
        '다니엘의원에서 백신 2차 접종을 완료했다. 팔뚝이 조금 아픈 것 같은데 내일 몸살이 나지 않을지 걱정이다ㅠㅠ',
      photos: [],
      tags: ['백신', '화이자', '접종완료', '백신후기'],
      thumbnail: '../images/vaccine.jpg',
      ratings: 2,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2021, 7, 10),
      updatedAt: new Date(2021, 7, 10),
    },
    {
      title: '올리브유',
      userId: 'jkrang104',
      reviewId: 25,
      summary: '최고의 블로그 서비스 올리브유 너무 좋다. 계속해서 이용해야 겠다.',
      content: '최고의 블로그 서비스 올리브유 너무 좋다. 계속해서 이용해야 겠다.',
      photos: [],
      tags: ['최고의 블로그'],
      thumbnail: '../images/olive.PNG',
      ratings: 5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '수제 패션후르츠청 리뷰',
      userId: 'seohey',
      reviewId: 26,
      summary: `친구에게 생일선물로 받은 수제 패션후르츠청을 개봉했다..!
      수제 과일청이라서 개봉하고 며칠 이내에 먹어야 해서 집에 손님들이 왔을 때 먹게 되었다.
      탄산수에 과일청 세 스푼을 넣고 쉐킷쉐킷하면
      홈카페 패션후르츠 에이드를 3초만에 완성!.!
      존맛탱🥰🥰🥰🥰🥰🥰
      새콤달콤 청량하고 색깔도 예쁜 패션후르츠에이드를 집에서 이렇게 쉽게 만들어 먹을 수 있다니^~^
      다 먹으면 또 사먹을 듯..!`,
      content: `친구에게 생일선물로 받은 수제 패션후르츠청을 개봉했다..!
      수제 과일청이라서 개봉하고 며칠 이내에 먹어야 해서 집에 손님들이 왔을 때 먹게 되었다.
      탄산수에 과일청 세 스푼을 넣고 쉐킷쉐킷하면
      홈카페 패션후르츠 에이드를 3초만에 완성!.!
      존맛탱🥰🥰🥰🥰🥰🥰
      새콤달콤 청량하고 색깔도 예쁜 패션후르츠에이드를 집에서 이렇게 쉽게 만들어 먹을 수 있다니^~^
      다 먹으면 또 사먹을 듯..!`,
      photos: [],
      tags: ['패션후르츠에이드', '홈카페', '생일선물리뷰', '수제과일청'],
      thumbnail: '../images/fruitsyrup.jpg',
      ratings: 5,
      likes: [
        'kheeyaa',
        'sosoyim',
        'seohey',
        'jkrang104',
        'jkrang1702',
        'hanana1254',
        'joker77z',
        'coolchaeyoung',
        'jiwonkim',
        'congaweb',
      ],
      comments: [
        {
          commentId: 1,
          userId: 'coolchaeyoung',
          content: '굳',
        },
        {
          commentId: 2,
          userId: 'jkrang104',
          content: '맛있어요 다음에 또 해주세요',
        },
        {
          commentId: 3,
          userId: 'sosoyim',
          content: '혜연님 저도 먹고 싶어요',
        },
        {
          commentId: 4,
          userId: 'jiwonkim',
          content: '빔일이예요',
        },
        {
          commentId: 5,
          userId: 'hustle-dev',
          content: '와 혜연님 정말 맛있겠네요',
        },
        {
          commentId: 6,
          userId: 'congaweb',
          content: '어디서 파는 거예요?',
        },
        {
          commentId: 7,
          userId: 'joy37',
          content: '맛있겠네요 ㅎㅎㅎ',
        },
      ],
      createdAt: new Date(2021, 6, 10),
      updatedAt: new Date(2021, 6, 10),
    },
    {
      title: '샌드위치',
      userId: 'kheeyaa',
      reviewId: 27,
      summary: 'gs25에서 햄치즈 샌드위치를 먹었다. 맛은 그냥 그랬다 평점 3점!',
      content: 'gs25에서 햄치즈 샌드위치를 먹었다. 맛은 그냥 그랬다 평점 3점!',
      photos: [],
      tags: ['gs25', '햄치토스트'],
      ratings: 3,
      thumbnail: '../images/sandwich.jpg',
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '포항 여행',
      userId: 'jkrang104',
      reviewId: 28,
      summary: '포항 여행을 갔다. 재밌었다. 물회도 먹었다.',
      content: '포항 여행을 갔다. 재밌었다. 물회도 먹었다.',
      photos: [],
      tags: ['포항 여행'],
      thumbnail: '../images/pohang.jpg',
      ratings: 4,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '강다니엘 손소독제 리뷰',
      userId: 'seohey',
      reviewId: 29,
      summary: `강다니엘 손소독제를 주문했더니
      무려 치킨이 함께 왔다
      혜자구성 대만족..!`,
      content: `강다니엘 손소독제를 주문했더니
      무려 치킨이 함께 왔다
      혜자구성 대만족..!`,
      photos: [],
      thumbnail: '../images/danielkang.jpg',
      tags: ['강다니엘', '손소독제', '멕시카나'],
      ratings: 5,
      likes: ['seohey'],
      comments: [
        {
          commentId: 1,
          userId: 'jkrang104',
          content: 'ㅋ',
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '맥북',
      userId: 'jkrang104',
      reviewId: 30,
      summary:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      content:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      photos: [],
      thumbnail: '../images/mac2.jpg',
      tags: ['맥북'],
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '맥북',
      userId: 'jkrang104',
      reviewId: 31,
      summary:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      content:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      photos: [],
      thumbnail: '../images/mac3.jpg',
      tags: ['맥북'],
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '지옥',
      userId: 'jkrang104',
      reviewId: 32,
      summary: '넷플릭스 드라마 지옥을 봤다. 너무 재미있었다.',
      content: '넷플릭스 드라마 지옥을 봤다. 너무 재미있었다.',
      photos: [],
      thumbnail: '../images/hell.jpg',
      tags: ['넷플릭스', '지옥', '유아인'],
      ratings: 4,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '오징어 게임',
      userId: 'jkrang104',
      reviewId: 33,
      summary: '요즘 인기 있는 오징어 게임을 봤다. 재미는 있었지만 조금 잔인했던 것 같다',
      content: '요즘 인기 있는 오징어 게임을 봤다. 재미는 있었지만 조금 잔인했던 것 같다',
      photos: [],
      thumbnail: '../images/sqidgame.jpg',
      tags: ['넷플릭스', '오징어 게임'],
      ratings: 4,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '이터널스',
      userId: 'jkrang104',
      reviewId: 34,
      summary: '마블 영화 이터널스를 봤다. 재밌었다.',
      content: '마블 영화 이터널스를 봤다. 재밌었다.',
      photos: [],
      tags: ['이터널스', '마동석', '마블'],
      thumbnail: '../images/eternals.jpg',
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
    {
      title: '맥북',
      userId: 'jkrang104',
      reviewId: 35,
      summary:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      content:
        '메롱 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ 그치만 애플 최고~ 맥북은 비싸다. 그치만 애플 최고~ ',
      photos: [],
      thumbnail: '../images/mac.jpeg',
      tags: ['맥북'],
      ratings: 2.5,
      likes: ['kheeyaa'],
      comments: [],
      createdAt: new Date(2020, 3, 10),
      updatedAt: new Date(2020, 3, 10),
    },
  ];

  const unit = 6;

  let offset = 0;

  return {
    get state() {
      return state;
    },

    generateId() {
      return Math.max(...this.state.map(({ reviewId }) => reviewId), 0) + 1;
    },

    add(newReview) {
      state = [...state, newReview];
    },

    change(curReviewId, newReview) {
      state = state.map(({ reviewId }, i) => (curReviewId === reviewId ? newReview : state[i]));
    },

    delete(curReviewId) {
      state = state.filter(({ reviewId }) => curReviewId !== reviewId);
    },

    get current() {
      return offset;
    },

    get next() {
      offset += unit;
      return offset;
    },

    reset() {
      offset = 0;
    },
  };
})();

module.exports = Review;
