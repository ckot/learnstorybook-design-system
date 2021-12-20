import { render } from '@testing-library/react';
import { Link } from './Link';

test('has an href attribute when rendering with LinkWrapper', () => {
    const LinkWrapper = props => <a {...props} />
    const { container } = render(
        <Link href="https:/storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
            Link Text
        </Link>
    )
    const linkElement = container.querySelector('a[href="https://storybook.js.org/tutorials/"]')
    expect(linkElement).not.toBeNull()
    expect(linkElement.textContent).toEqual('Link Text')
})
