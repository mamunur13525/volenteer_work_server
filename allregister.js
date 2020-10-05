
/* Valunteer Collection Database */
client.connect(err => {
    const valunteerCollection = client.db("valunteerNnetwork").collection("allValunteer");
    valunteerCollection.insertMany(
        [
        {
        name: 'Child Support',
        description: '',
        photoId: 'https://i.ibb.co/Z2ThK6B/child-Support.png'
        },
        {
        name: 'Refuge Shelter',
        description: '',
        photoId: 'https://i.ibb.co/D8j2bT4/refuse-Shelter.png'
        },
        
        {
        name: 'Food Charity',
        description: '',
        photoId: 'https://i.ibb.co/yfC3tjS/food-Charity.png'
        },
        
        {
        name: 'Host a cloting swap.',
        description: '',
        photoId: 'https://i.ibb.co/Kx4pmFP/cloth-Swap.png'
        },
        
        {
        name: 'Host a river clean-up',
        description: '',
        photoId: 'https://i.ibb.co/JprNsLF/river-Clean.png'
        },
        
        {
        name: 'Clean water for children',
        description: '',
        photoId: 'https://i.ibb.co/NNf40XS/clean-Water.png'
        },
        
        {
        name: 'Good education',
        description: '',
        photoId: 'https://i.ibb.co/yq9s8vn/good-Education.png'
        },
        
        {
        name: 'New books for children',
        description: '',
        photoId: 'https://i.ibb.co/Yk6jrLD/newBooks.png'
        },
        
        {
        name: 'Host a study group',
        description: '',
        photoId: 'https://i.ibb.co/BVs4126/study-Group.png'
        },
        
        {
        name: 'Build birdhouses for your neighbors.',
        description: '',
        photoId: 'https://i.ibb.co/6Nk2PbF/bird-House.png'
        },
        
        {
        name: 'Organise books at the library',
        description: '',
        photoId: 'https://i.ibb.co/hcv3f6S/library-Books.png'
        },
        
        {
        name: 'Give a seminar on driving safety',
        description: '',
        photoId: 'https://i.ibb.co/z2hMRhX/drive-Safety.png'
        },
        
        {
        name: 'Give free music lessons',
        description: '',
        photoId: 'https://i.ibb.co/tQppj2C/music-Lessons.png'
        },
        
        {
        name: 'Teach poeple how to register to vote',
        description: '',
        photoId: 'https://i.ibb.co/SyLR9fp/vote-Register.png'
        },
        
        {
        name: 'Clean up your local park',
        description: '',
        photoId: 'https://i.ibb.co/YDMKc1p/clearn-Park.png'
        },
        
        {
        name: 'Give IT help to local adults',
        description: '',
        photoId: 'https://i.ibb.co/7krq78x/ITHelp.png'
        },
        
        {
        name: 'Foster a shelter animal',
        description: '',
        photoId: 'https://i.ibb.co/hWNThvh/animal-Shelter.png'
        },
        
        {
        name: 'Babysit during PTA meetings.',
        description: '',
        photoId: 'https://i.ibb.co/4JYMfc6/babySit.png'
        },
        
        {
        name: 'Collect stuffed animals.',
        description: '',
        photoId: 'https://i.ibb.co/WVTVRKR/stuffed-Animals.png'
        },
        
        {
        name: 'Collect school supplies',
        description: '',
        photoId: 'https://i.ibb.co/6wKZhYR/school-Suffiles.png'
        }
      ]
        
        )
     
   
  });
  
  