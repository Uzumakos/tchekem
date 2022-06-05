export const userQuery = (itilizateId) => {
 const query = `*[_type == "itilizate" && _id == '${itilizateId}']`;

 return query;
}

export const searchQuery = (rechechTerm) => {
    const query = `*[_type == "tchek" && title match '${rechechTerm}*' || kategori match '${rechechTerm}*' || apwopo match '${rechechTerm}*']{
        imaj {
            asset->{
                url
            }
        },
        _id,
        destinasyon,
        postedBy -> {
            _id,
            nonItilizate,
            imaj
        },
        sovgade[] {
            _key,
            postePa -> {
                _id,
                nonItilizate,
                imaj
            },
        },
    }`

    return query;
}

export const feedQuery = `*[_type == "tchek"] | order(_createdAt desc) {
    imaj {
        asset->{
            url
        }
    },
    _id,
    destinasyon,
    postePa -> {
        _id,
        nonItilizate,
        imaj
    },
    sovgade[] {
        _key,
        postePa -> {
            _id,
            nonItilizate,
            imaj
        },
    },
}`