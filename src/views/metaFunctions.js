/* eslint-disable no-unused-vars */
const createMetaTag = (type, value) => {
    const meta = document.createElement("meta");
    if (type === "description") meta.setAttribute("name", type);
    else meta.setAttribute("property", type);

    meta.setAttribute("content", value);
    meta.setAttribute('v-meta-tag', '');

    return meta;
};

export default (category) => {
    const head = document.head;

    if (category.categoryName) document.title = `${category.name} - ${category.categoryName} | Maksym STIHL`;
    else document.title = `${category.name} | Maksym STIHL`;

    const description = createMetaTag("description", category.meta_desc);
    const keywords = createMetaTag("keywords", category.keywords);
    const og_title = createMetaTag("og:title", document.title);
    const og_desc = createMetaTag("og:description", category.meta_desc);

    let og_siteName;
    if (category.categoryName) og_siteName = createMetaTag("og:site_name", `${category.name} - ${category.categoryName}`);
    else og_siteName = createMetaTag("og:site_name", `${category.name}`)

    const og_type = createMetaTag("og:type", 'website');
    const og_url = createMetaTag("og:url", `https://${location.hostname}${category.link}`)
    const og_image = createMetaTag("og:image", `https://${location.hostname}/img/logo.f2323fc1..png`)

    head.appendChild(description);
    head.appendChild(keywords);
    head.appendChild(og_title);
    head.appendChild(og_desc);
    head.appendChild(og_siteName);
    head.appendChild(og_type);
    head.appendChild(og_url);
    head.appendChild(og_image);
}