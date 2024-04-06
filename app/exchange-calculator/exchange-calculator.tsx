import { getListOfQuotes } from "./api";
import { ExchangeForm } from "./components";


export default async function ExchangeCalculator() {
    const listQuotes = await getListOfQuotes()

    return (
        <ExchangeForm listQuotes={listQuotes.data.symbols} />
    )
}