const productsData = [
    {
        id: 1,
        name: '欧时力 黑标系列冬装 配腰带英',
        source: '唯品会',
        price: 368,
        features: ['黑标系列', '配腰带'],
        imageUrl: 'https://img1.baidu.com/it/u=1234567890,1234567890&fm=26&fmt=auto&gp=0.jpg', // 这里需替换为真实的商品图片链接
        likes: 0
    },
    {
        id: 2,
        name: '伦风纯羊毛呢大衣女',
        source: '天猫超市',
        price: 17.57,
        features: ['纯羊毛'],
        imageUrl: 'https://img2.baidu.com/it/u=1234567890,1234567890&fm=26&fmt=auto&gp=0.jpg',
        likes: 0
    },
    {
        id: 3,
        name: '有机板栗仁',
        source: '京东自营',
        price: 99,
        features: ['有机食品'],
        imageUrl: 'https://img3.baidu.com/it/u=1234567890,1234567890&fm=26&fmt=auto&gp=0.jpg',
        likes: 0
    },
    {
        id: 4,
        name: '65W快充',
        source: '京东自营',
        price: 99,
        features: ['快充'],
        imageUrl: 'https://img4.baidu.com/it/u=1234567890,1234567890&fm=26&fmt=auto&gp=0.jpg',
        likes: 0
    },
    {
        id: 5,
        name: '361女鞋运动鞋跑步鞋休闲运动鞋',
        source: '天猫商城',
        price: 59.1,
        features: ['休闲', '运动'],
        imageUrl: 'https://img5.baidu.com/it/u=1234567890,1234567890&fm=26&fmt=auto&gp=0.jpg',
        likes: 0
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(productsData);
        }, 1000);
    });
};