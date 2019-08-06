export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Googling for the Regex",
      author: "Susan J. Fowler",
      price: 32,
      coverImage: "https://boyter.org/static/books/Cn1rWcbWcAAgsCA.jpg"
    },
    {
      id: 2,
      title: "Bloated Jabbascript frameworks",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://boyter.org/static/books/ChnulxvW0AEUs1J.jpg-large.jpg"
    },
    {
      id: 3,
      title: "Coding on Weekend",
      author: "Michael T. Nygard",
      price: 60,
      coverImage: "https://boyter.org/static/books/Cg0x8vnXEAEB2Le.jpg"
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75)
          return reject(
            new Error(
              "Andruha Gusb."
            )
          );
        return resolve(this.data);
      }, 700);
    });
  }
}
