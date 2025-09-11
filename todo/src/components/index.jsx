import { Btn } from "./btn";
import { Header } from "./header";
import { Input } from "./input";

export function Index() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Header/>
        <div>
            <Input/>
            <Btn/>
        </div>
    </div>
)
}
