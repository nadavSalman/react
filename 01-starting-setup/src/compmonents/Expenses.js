import './Expenses.css'
import ExpenseItem from './Expenseitem';
import Card from './Card';

function Expenses (props){


    const expensesList = props.expenses.map((item) => 
        <ExpenseItem 
                title={item.title}
                amount={item.amount}
                date={item.date}/>);

    return(
        <Card className="expenses"> 
            {expensesList}
        </Card>
    );
}

export default Expenses; 