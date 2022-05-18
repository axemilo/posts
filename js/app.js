const renderComments = () => {
  for (let i = 0; i < posts.length; i++) {}
}

const renderItems = (post) => {
  const main = document.querySelector('#main')
  for (let i = 0; i < post.length; i++) {
    const elItem = document.createElement('li')
    elItem.className = 'post__item rounded-2 border p-3  mb-3 shadow'
    main.appendChild(elItem)
    elItem.innerHTML = `<div class="post__item-profile d-flex mb-3">
    <img
      class="post__profile-img rounded-circle mx-2 d-inline-block"
      src="https://picsum.photos/200/${i + 200}
    "
      alt=""
      width="70"
      height="70"
    />
    <p class="post__profile-title fs-5 fw-semibold">
      ${post[i].user.name}
      <span class="d-block fw-normal">@${post[i].user.username}</span>
    </p>
  </div>
  <div class="post__item-main">
    <h4 class="post__item-title  fw-semibold text-capitalize">
      ${post[i].title}

    </h4>
    <p class="post__item-text mb-4 fs-6 text-capitalize">
    ${post[i].body} ${post[i].body}
    </p>
  </div>
  <a class="" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false"   aria-controls="collapseExample">
    Comments
  </a>
  `

    for (let j = 0; j < post[i].comments.length; j++) {
      const collapseDiv = document.createElement('div')
      const collapseEl = document.createElement('div')

      collapseDiv.className = 'collapse mt-3 mx-3 border-bottom py-2'
      collapseDiv.id = `collapseExample${i}`
      collapseEl.className = ' card-body'

      collapseDiv.appendChild(collapseEl)
      elItem.appendChild(collapseDiv)
      collapseEl.innerHTML = `<div class="d-flex align-items-center mb-2">
      <img class="rounded-circle d-inline-block" src="https://picsum.photos/202/${j + i + 300}" width="50" height="50"/>
      <p class="mx-3 fw-semibold text-lowercase ">${post[i].comments[j].email}</p>
      </div>
      <div class="">
      <p class="fw-bold fs-6 mb-1">${post[i].comments[j].name}</p>
      <p class="mb-1">${post[i].comments[j].body}</p>
      </div>
      
      `
    }
  }
}

renderItems(posts)
