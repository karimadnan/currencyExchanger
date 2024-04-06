import { getListOfQuotes } from "./api";
import { ExchangeForm } from "./components";


export default async function() {
    const listQuotes = await getListOfQuotes()

    return (
        <ExchangeForm listQuotes={listQuotes.data.symbols} />
    )
}