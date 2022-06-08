const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

    const createdUsers = await prisma.user.createMany({
        data: [
            {
                 username: 'alicemar1',
                 email: 'alicemartin1@gmail.com',
            },
            { 
                username: 'alicemar2',
                email: 'alicemartin2@gmail.com',
            }
        ]
    });

    const createProfiles = await prisma.profile.createMany({
        data: [
            {
                       profileImgUrl: 'https://imagerandom.com',
                       bio:'some random things about me',
                       userId: 1,
            },
            {
                       profileImgUrl: 'https://imagerandom2.com',
                       bio:'some random things about me as well',
                       userId:2,
                    }
           

        ]
    })

    const createPosts = await prisma.post.createMany({
        data: [
            {
               title:'200 years before',
               content:'Long long time ago',
               isPublished: true,
               userId: 1,
            },
            {
               title:'400 years before',
               content:'Long long LOOOONG time ago',
               isPublished: true,
               userId: 2,
               ImgUrl:'https://imagerandom.com'
            },
        ]
    })

  const createComments = await prisma.comment.createMany({
    data: [
            {
                content:'Nice one mate',
                userId: 1,
                postId:2,
             },
             {
                content:'Long time no see',
                userId: 2,
                postId:2,
             },
    ]
  })

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })