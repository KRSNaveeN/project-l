import Table from 'react-bootstrap/Table';

const Cart = ({listitems})=>{
    let total = 0;
    return<>
    <Table>
        <thead>
            <tr>
                <td>Items</td>
                <td>small</td>
                <td>large</td>
                <td>medium</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            {
                listitems.map((items)=>{
                    if(items.scount>0 || items.lcount >0 || items.mcount>0)
                    {
                        let x = items.scount + items.mcount + items.lcount;
                        total = total + x*(items.price);
                        return <tr>
                        <td>{items.description}</td>
                        <td>{items.scount}</td>
                        <td>{items.lcount}</td>
                        <td>{items.mcount}</td>
                        <td>${x*(items.price)}</td>
                    </tr>
                    }
                })
            }
            <tr>
                <td>TOTAL</td>
                <td>${total}</td>
            </tr>
        </tbody>
    </Table>
    </>
}

export default Cart;