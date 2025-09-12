import { Btn } from "./btn";
import { Header } from "./header";
import { Input } from "./input";

export function Index() {
    return (
    <div className="flex justify-center content-center">
        <Header/>
        <div>
            <Input/>
            <Btn/>
        </div>
    </div>
)
}
