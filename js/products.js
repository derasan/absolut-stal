'use strict';

function createTree(tree) {
    if (tree.products.length) {
        window.tree = tree;

        $(".product-li").hide();

        let newProduct = document.getElementById("about-text-new");
        let btn = '<button type="button" onclick="window.history.back()" style="margin: 30px 0;" class="btn btn-outline-secondary back_btn">Вернуться к каталогу</button>';

        if (tree.products[0].id) {
            for (let i in tree.products) {

                    let html =
                        `<div class="product-li full" id=${tree.products[i].id} onclick="createTree(tree.products[id-1])">
                            ${tree.products[i].name}
                        </div>`;

                    newProduct.innerHTML += html;
                }
        } else {
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
                $('#myTable').append('' +
                    '<tr>' +
                    '<td>'+ `${tree.products[i].name}` + '</td>'+
                    '<td>'+ `${tree.products[i].size}` + '</td>'+
                    '<td>'+ `${tree.products[i].marka}` + '</td>'+
                '</tr>');
            }
        }

        $(".back_btn").hide();
        newProduct.innerHTML += btn;
    }
}





