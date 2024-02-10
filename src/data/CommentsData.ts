import type { IComment } from "@/interfaces/IComment";

const Comments: IComment[] = [
    {
        id: 0,
        title: "First comment",
        body: "This is the first comment",
        date: new Date(),
        autor: "Neto"
    },
    {
        id: 1,
        title: "Second comment",
        body: "This is the second comment",
        date: new Date(),
        autor: "Dinneno"
    },
    {
        id: 2,
        title: "Third comment",
        body: "This is the third comment",
        date: new Date(),
        autor: "Chino Huerta"
    },
    {
        id: 3,
        title: "Fourth comment",
        body: "This is the fourth comment",
        date: new Date(),
        autor: "Darío Verón"
    }
];

export default Comments;