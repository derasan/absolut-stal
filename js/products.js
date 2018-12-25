'use strict';

function createTree(tree) {
    if (tree.products.length) {
        window.tree = tree;

        $(".product-li").hide();

        let newProduct = document.getElementById("about-text-new");

        if (tree.products[0].id) {
            for (let i in tree.products) {

                    let html =
                        `<div class="product-li full" id=${tree.products[i].id} onclick="createTree(tree.products[id-1])">
                            ${tree.products[i].name}
                        </div>`;

                    newProduct.innerHTML += html;
                }
            console.log(tree.products[0].name);
            console.log(tree.products[0].id);
        } else {
            console.log('popali');
            let kkk = `<table class="table" id="myTable">
                        <thead>
                        <tr>
                        <th scope="col">Продукция</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Марка</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                       </table>`;

            newProduct.innerHTML += kkk;

            for (let i in tree.products) {
                let html =
                    `<div class="product-li full">
                    ${tree.products[i].name}
                </div>`;

                $('#myTable').append('' +
                    '<tr>' +
                    '<td>'+ `${tree.products[i].name}` + '</td>'+
                    '<td>'+ `${tree.products[i].size}` + '</td>'+
                    '<td>'+ `${tree.products[i].marka}` + '</td>'+
                '</tr>');

                newProduct.innerHTML += html;
                $(".product-li").hide();
            }
        }
    }
}






