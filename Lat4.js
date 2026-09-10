const tags = [
 ["computer", "office"],
 ["electronics"],
 ["gaming", "computer"]
];

const allTagsFlat = products.flatMap(p => p.tags);
console.log(allTagsFlat);

const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log(allComments);
