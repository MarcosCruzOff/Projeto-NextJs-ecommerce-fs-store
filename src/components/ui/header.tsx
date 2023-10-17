import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from './button'
import { Card } from './card'

const Header = () => {
	return (
		<Card className="flex justify-between p-[1.875rem]">
			<Button size="icon" variant="outline">
				<MenuIcon></MenuIcon>
			</Button>

			<h1 className="text-primary">fs-store</h1>

			<Button size="icon" variant="outline">
				<ShoppingCartIcon />
			</Button>
		</Card>
	)
}

export default Header
