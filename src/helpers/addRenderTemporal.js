export const addRenderIsNoExist = (data) => {
  let infoData = []
  infoData = data.map((info) => {
    if (info.renders === undefined) {
      info.renders = [
        {
          id: 1,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:19.000Z",
          updatedAt: "2022-02-22T21:09:19.000Z",
        },
        {
          id: 2,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:24.000Z",
          updatedAt: "2022-02-22T21:09:24.000Z",
        },
        {
          id: 3,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:25.000Z",
          updatedAt: "2022-02-22T21:09:25.000Z",
        },
        {
          id: 4,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:26.000Z",
          updatedAt: "2022-02-22T21:09:26.000Z",
        },
        {
          id: 5,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:26.000Z",
          updatedAt: "2022-02-22T21:09:26.000Z",
        },
        {
          id: 6,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:27.000Z",
          updatedAt: "2022-02-22T21:09:27.000Z",
        },
        {
          id: 7,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:27.000Z",
          updatedAt: "2022-02-22T21:09:27.000Z",
        },
        {
          id: 8,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:28.000Z",
          updatedAt: "2022-02-22T21:09:28.000Z",
        },
        {
          id: 9,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:29.000Z",
          updatedAt: "2022-02-22T21:09:29.000Z",
        },
        {
          id: 10,
          url: "https://static.wikia.nocookie.net/halo/images/8/84/InfiniteChiefTRANSPARENTholdingReachAR.png/revision/latest?cb=20211120225024",
          productId: "1",
          createdAt: "2022-02-22T21:09:29.000Z",
          updatedAt: "2022-02-22T21:09:29.000Z",
        },
      ];
    }

    if (info.thumbnail === undefined) {
      info.thumbnail = [
        {
          id: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yU5qKkYSpo_9WjHwXAU8tIKLpuSKNYYMYtq2SGWCi62tRZOoW1C297JuGxLBXE16byY&usqp=CAU",
          productId: "1",
          createdAt: "2022-02-22T21:09:34.000Z",
          updatedAt: "2022-02-22T21:09:34.000Z",
        },
      ];
    }
    return info
  });
  return infoData;
};
