import renderer from "react-test-renderer";
import React from "react";
import { mount } from 'enzyme';
import Icon from "../icon";

describe("Icon test", () => {
  it("render successfully", () => {
    const json = renderer.create(<Icon name='wechat' />).toJSON();
    expect(json).toMatchSnapshot();  // 如需更新最新snapshot，允许yarn test -u
	});
	it('onClick', () => {
		const fn = jest.fn();
		const component = mount(<Icon name='wechat' onClick={fn} />)
		component.find('svg').simulate('click')
		expect(fn).toBeCalled();
	})
});

