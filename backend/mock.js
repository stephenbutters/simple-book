const cards = [{
    id: 0,
    title: "我的漏风的袄",
    content: "结婚，是我最辈子受过最大的屈辱。 27岁，一年前做了家庭主妇，带着2个孩子，现在肚子里还有一个。 昨天晚上，我告诉老公，明天要去体检，需要钱，没...",
    author: "感冒的梵高",
    comments: 1034,
    diamond: 53.3,
    likes: 5098
}, {
    id: 1,
    title: "结婚，是我这辈子受过最大的侮辱",
    content: "经历了两天一夜的高烧不退，尝到了刮骨疗毒之痛，昏昏沉沉的一直在睡，感觉随时都可能在昏睡中去见阎王！ 下午三点饿醒了，感觉额头上有了一点细密的汗珠...",
    author: "大头芝麻",
    comments: 101,
    diamond: 60.4,
    likes: 790
}, {
    id: 2,
    title: "往事",
    content: "前段时间回老家，我是坐公共汽车回去的，到了村里，有个堂嫂看见了我，和我打招呼，她说：＂你怎么没开车来呀？＂我说我家没车，我也不会开。她说：＂你不...",
    author: "梨园",
    comments: 60,
    diamond: 35.4,
    likes: 456
}, {
    id: 3,
    title: "阿娇曾静的婚姻",
    content: "一位女性朋友，人到中年，婚姻不和，每天为丈夫曾经出轨的事烦心透顶。 丈夫说她：“你就没别的事忙了吗？整天盯着我！” 她对我说：“我其实很忙，但我...",
    author: "散落人群",
    comments: 40,
    diamond: 90.1,
    likes: 501
}];

const authors = [{
    thumbnailUrl: "https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: "茶点故事",
    description: "写了4376.3k字 · 17k喜欢"
}, {
    thumbnailUrl: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: "路虎说",
    description: "写了2200.7k字 · 34.7k喜欢"
},
{
    thumbnailUrl: "https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: "与文化",
    description: "写了147k字 · 2.6k喜欢"
},
{
    thumbnailUrl: "https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: "落枕",
    description: "写了43.5k字 · 803喜欢"
}];

const articles = [{
    title: "我的漏风的袄",
    likes: 5098,
    author: "感冒的梵高",
    author_thumbnail: "https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    diamond: 53.3,
    last_update: "2022.10.31 09:46:14",
    word_count: 486,
    read_amount: 5574,
    ip_location: "北京",
    paragraphs: ["早上，锻炼身体回来的路上，听到一位大爷骂骂咧咧说：“某某在他的田地的小房子里上吊自杀。”", "原来自杀的是一个六十多岁的妇女，前几年她爱人在洗澡过程中，脑梗塞去世。他们有一对儿女，女儿大已经出嫁，儿子还没有结婚。这样母子两个人过着日子，还是幸福的。", "能活着就是我们每个人的福份，更何况经历了那么多，自己与病痛抗争那么久，才能有现在的状况，为什么不珍惜，不感恩，不坚强地活下去，而选择了放弃，选择用这种方式结束生命？", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "对于她的自杀，大多数人是表示惋惜，说好不容易能挽救生活。现在能自己行走，生活能自理，就是不幸中的万幸，怎么还想不开，走这条不归路？", "我们不能评价她是对是错，也不知道她面对的是什么，所以也不能去做出任何评论。", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "前不久，她生病了，颈椎坏死，导致双手不能听使唤，住院治疗。经过众筹和亲戚朋友帮助下，终于治愈回家疗养。听说现在病情稳定，情况越来越好，可为什么还要自杀呢？"]
}, {
    title: "结婚，是我这辈子受过最大的侮辱",
    likes: 790,
    author: "大头芝麻",
    author_thumbnail: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    diamond: 60.04,
    last_update: "2022.10.31 09:46:14",
    word_count: 101,
    read_amount: 55,
    ip_location: "北京",
    paragraphs: ["早上，锻炼身体回来的路上，听到一位大爷骂骂咧咧说：“某某在他的田地的小房子里上吊自杀。”", "原来自杀的是一个六十多岁的妇女，前几年她爱人在洗澡过程中，脑梗塞去世。他们有一对儿女，女儿大已经出嫁，儿子还没有结婚。这样母子两个人过着日子，还是幸福的。", "能活着就是我们每个人的福份，更何况经历了那么多，自己与病痛抗争那么久，才能有现在的状况，为什么不珍惜，不感恩，不坚强地活下去，而选择了放弃，选择用这种方式结束生命？", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "对于她的自杀，大多数人是表示惋惜，说好不容易能挽救生活。现在能自己行走，生活能自理，就是不幸中的万幸，怎么还想不开，走这条不归路？", "我们不能评价她是对是错，也不知道她面对的是什么，所以也不能去做出任何评论。", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "前不久，她生病了，颈椎坏死，导致双手不能听使唤，住院治疗。经过众筹和亲戚朋友帮助下，终于治愈回家疗养。听说现在病情稳定，情况越来越好，可为什么还要自杀呢？"]
}, {
    title: "往事",
    likes: 98,
    author: "梨园",
    author_thumbnail: "https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    diamond: 43.3,
    last_update: "2022.10.31 09:46:14",
    word_count: 46,
    read_amount: 74,
    ip_location: "北京",
    paragraphs: ["早上，锻炼身体回来的路上，听到一位大爷骂骂咧咧说：“某某在他的田地的小房子里上吊自杀。”", "原来自杀的是一个六十多岁的妇女，前几年她爱人在洗澡过程中，脑梗塞去世。他们有一对儿女，女儿大已经出嫁，儿子还没有结婚。这样母子两个人过着日子，还是幸福的。", "能活着就是我们每个人的福份，更何况经历了那么多，自己与病痛抗争那么久，才能有现在的状况，为什么不珍惜，不感恩，不坚强地活下去，而选择了放弃，选择用这种方式结束生命？", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "对于她的自杀，大多数人是表示惋惜，说好不容易能挽救生活。现在能自己行走，生活能自理，就是不幸中的万幸，怎么还想不开，走这条不归路？", "我们不能评价她是对是错，也不知道她面对的是什么，所以也不能去做出任何评论。", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "前不久，她生病了，颈椎坏死，导致双手不能听使唤，住院治疗。经过众筹和亲戚朋友帮助下，终于治愈回家疗养。听说现在病情稳定，情况越来越好，可为什么还要自杀呢？"]
}, {
    title: "阿娇曾经的婚姻",
    likes: 501,
    author: "散落人群",
    author_thumbnail: "https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    diamond: 90.1,
    last_update: "2022.10.31 09:46:14",
    word_count: 586,
    read_amount: 974,
    ip_location: "北京",
    paragraphs: ["早上，锻炼身体回来的路上，听到一位大爷骂骂咧咧说：“某某在他的田地的小房子里上吊自杀。”", "原来自杀的是一个六十多岁的妇女，前几年她爱人在洗澡过程中，脑梗塞去世。他们有一对儿女，女儿大已经出嫁，儿子还没有结婚。这样母子两个人过着日子，还是幸福的。", "能活着就是我们每个人的福份，更何况经历了那么多，自己与病痛抗争那么久，才能有现在的状况，为什么不珍惜，不感恩，不坚强地活下去，而选择了放弃，选择用这种方式结束生命？", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "对于她的自杀，大多数人是表示惋惜，说好不容易能挽救生活。现在能自己行走，生活能自理，就是不幸中的万幸，怎么还想不开，走这条不归路？", "我们不能评价她是对是错，也不知道她面对的是什么，所以也不能去做出任何评论。", "而这些是站在对生命的珍惜这个角度来说的。愿每个人都好好珍惜这来之不易的生命！", "前不久，她生病了，颈椎坏死，导致双手不能听使唤，住院治疗。经过众筹和亲戚朋友帮助下，终于治愈回家疗养。听说现在病情稳定，情况越来越好，可为什么还要自杀呢？"]
}]

module.exports = { cards, authors, articles };