import css from './SearchBox.module.css'

interface SeachBoxProps {
    query: string;
    updateQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SeachBox({query, updateQuery}: SeachBoxProps) {
 return (<input
	className={css.input}
  type="text"
  placeholder="Search notes"
  value={query}
  onChange={updateQuery}
 />
)
}